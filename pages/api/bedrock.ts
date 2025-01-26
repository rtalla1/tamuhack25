import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";
import { generateText } from "ai";
import { NextApiRequest, NextApiResponse } from "next";

// ✅ Securely configure AWS credentials in the backend
const bedrock = createAmazonBedrock({
  bedrockOptions: {
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { prompt } = req.body;

    // ✅ Use On-Demand Bedrock Model (Claude 3 Sonnet)
    const { text } = await generateText({
      model: bedrock("anthropic.claude-3-sonnet-20240229-v1:0"),
      prompt,
    });

    return res.status(200).json({ response: text });
  } catch (error) {
    console.error("Bedrock API Error:", error);
    return res.status(500).json({ message: "Error processing request" });
  }
}
