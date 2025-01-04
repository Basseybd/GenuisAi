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

    const { prompt } = await req.json();
    if (!prompt) {
      return new NextResponse("Prompt is Required", { status: 400 });
    }

    // Build the MusicGen input
    const input = {
      top_k: 250,
      top_p: 0,
      prompt: String(prompt),
      duration: 15,
      temperature: 1,
      continuation: false,
      model_version: "stereo-large",
      output_format: "mp3",
      continuation_start: 0,
      multi_band_diffusion: false,
      normalization_strategy: "peak",
      classifier_free_guidance: 3,
    };

    // Create a prediction (which starts the generation)
    let prediction = await replicate.predictions.create({
      // "version" is the actual MusicGen version ID
      // This is the same string that appears after "meta/musicgen:"
      version:
        "671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
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
      // "prediction.output" should be a direct .mp3 URL
      console.log("[Music_Response] MP3 URL:", prediction.output);
      return NextResponse.json({ audio: prediction.output });
    } else {
      // Something went wrong or user canceled, etc.
      return NextResponse.json({
        error: `Prediction ended with status: ${prediction.status}`,
      });
    }
  } catch (error) {
    console.error("[MUSIC_ERROR]", error);
    return new NextResponse(`Internal Error: ${error}`, { status: 500 });
  }
}
