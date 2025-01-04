import { FileOutput } from "./../../../node_modules/replicate/index.d";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const input = {
      prompt: String(prompt),
      prompt_optimizer: true,
    };

    let prediction = await replicate.predictions.create({
      model: "minimax/video-01",
      input,
    });

    // Poll until the status is "succeeded" (or "failed"/"canceled")
    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed" &&
      prediction.status !== "canceled"
    ) {
      // Sleep for ~2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Refresh prediction state
      prediction = await replicate.predictions.get(prediction.id!);
    }

    if (prediction.status === "succeeded") {
      // "prediction.output" should be a direct video URL
      console.log("[Video_Response] video URL:", prediction.output);
      return NextResponse.json({ video: prediction.output });
    } else {
      // Something went wrong or user canceled, etc.
      return NextResponse.json({
        error: `Prediction ended with status: ${prediction.status}`,
      });
    }
  } catch (error) {
    console.error("[VIDEO_ERROR]", error);
    return new NextResponse(`Internal Error: ${error}`, { status: 500 });
  }
}
