import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: "No text provided" });
    }

    // Create a unique file name
    const fileName = `uploads/${uuidv4()}.txt`;

    // Upload to S3
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: fileName,
        Body: text,
        ContentType: "text/plain",
      })
    );

    return res.status(200).json({ message: "File uploaded successfully!", fileName });
  } catch (error) {
    console.error("S3 Upload Error:", error);
    return res.status(500).json({ message: "Error uploading file to S3" });
  }
}
