import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import { generateText } from "ai";
import { NextApiRequest, NextApiResponse } from "next";
import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";

// ✅ Initialize Amazon Bedrock with Secure Credentials
const bedrock = createAmazonBedrock({
  bedrockOptions: {
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  },
});

// ✅ Initialize S3 Client
const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// ✅ Function to List All Files in S3 Bucket
async function listFilesInS3(bucket: string) {
  try {
    const command = new ListObjectsV2Command({ Bucket: bucket });
    const { Contents } = await s3.send(command);
    if (!Contents || Contents.length === 0) throw new Error("No files found in S3 bucket.");
    return Contents.map((file) => file.Key!).filter(Boolean);
  } catch (error) {
    console.error("Error listing files in S3:", error);
    throw new Error("Failed to retrieve file list.");
  }
}

// ✅ Function to Read File from S3
async function getFileFromS3(bucket: string, key: string) {
  try {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const { Body } = await s3.send(command);
    if (!Body) throw new Error(`S3 file ${key} is empty.`);

    // ✅ Convert S3 Stream to Buffer
    const fileBuffer = await Body.transformToByteArray();

    return { fileBuffer, fileName: key };
  } catch (error) {
    console.error(`Error fetching file ${key} from S3:`, error);
    throw new Error(`Failed to retrieve ${key} from S3.`);
  }
}

// ✅ API Handler Function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { prompt } = req.body;
    console.log("🔍 Fetching all files from S3...");

    // ✅ Step 1: Retrieve File List from S3
    const files = await listFilesInS3(process.env.AWS_S3_BUCKET_NAME!);
    console.log(`✅ Found ${files.length} files.`);

    // ✅ Step 2: Retrieve File Contents
    const fileDataArray = await Promise.all(
      files.map(async (file) => await getFileFromS3(process.env.AWS_S3_BUCKET_NAME!, file))
    );

    console.log(`✅ Retrieved ${fileDataArray.length} files.`);

    // ✅ Step 3: Format Files for Bedrock Model
    const bedrockFiles = fileDataArray.map(({ fileBuffer, fileName }) => ({
      type: "file",
      data: fileBuffer,
      mimeType: fileName.endsWith(".pdf") ? "application/pdf" : "text/plain",
    }));

    // ✅ Step 4: Send Files + User Text to Amazon Bedrock Using Nova Pro with Inference Profile
    const { text } = await generateText({
      model: bedrock("amazon.nova-pro-v1:0"), // ✅ Corrected model identifier
      inferenceConfig: {
        inferenceProfileArn: process.env.AWS_BEDROCK_INFERENCE_PROFILE_ARN!, // ✅ Ensure this environment variable is set
      },
      messages: [
        {
          role: "user",
          content: [{ type: "text", text: prompt }, ...bedrockFiles],
        },
      ],
    });

    console.log("✅ Bedrock Response:", text);

    // ✅ Step 5: Return Response
    return res.status(200).json({ response: text });
  } catch (error) {
    console.error("❌ API Error:", error);
    return res.status(500).json({ message: "Failed to process request." });
  }
}
