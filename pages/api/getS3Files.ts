import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";

// ✅ Initialize Amazon Bedrock Client
const bedrock = new BedrockRuntimeClient({ region: "us-east-2" });

// ✅ Initialize S3 Client
const s3 = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// ✅ Function to List All Files in S3
async function listFilesInS3(bucket: string) {
  try {
    const command = new ListObjectsV2Command({ Bucket: bucket });
    const { Contents } = await s3.send(command);
    if (!Contents || Contents.length === 0) throw new Error("No files found in S3 bucket.");
    return Contents.map((file) => file.Key!).filter(Boolean);
  } catch (error) {
    console.error("❌ Error listing files in S3:", error);
    throw new Error("Failed to retrieve file list.");
  }
}

// ✅ Function to Read File from S3
async function getFileFromS3(bucket: string, key: string) {
  try {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const { Body } = await s3.send(command);
    if (!Body) throw new Error(`S3 file ${key} is empty.`);

    // ✅ Convert S3 Stream to Text
    const fileText = await Body.transformToString();
    return { fileText, fileName: key };
  } catch (error) {
    console.error(`❌ Error fetching file ${key} from S3:`, error);
    throw new Error(`Failed to retrieve ${key} from S3.`);
  }
}

// ✅ API Handler
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

    // ✅ Step 3: Merge All Files into a Single Text Block
    const mergedText = fileDataArray.map(({ fileText }) => fileText).join("\n\n");

    // ✅ Step 4: Send Text to Amazon Bedrock for Embeddings
    console.log("🧠 Sending text to Amazon Bedrock...");
    const inputPayload = {
      inputText: mergedText, // ✅ Correct format for embedding models
    };

    const bedrockInput = {
      modelId: "amazon.titan-embed-text-v2:0", // ✅ Embedding Model
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify(inputPayload),
    };

    const command = new InvokeModelCommand(bedrockInput);
    const response = await bedrock.send(command);

    // ✅ Parse Embedding Response
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    const embeddings = responseBody.embeddings; // ✅ Titan returns embeddings (vectors)

    console.log("✅ Bedrock Response:", embeddings);

    // ✅ Step 5: Return Embeddings as Response
    return res.status(200).json({ response: embeddings });
  } catch (error) {
    console.error("❌ API Error:", error);
    return res.status(500).json({ message: "Failed to process request." });
  }
}
