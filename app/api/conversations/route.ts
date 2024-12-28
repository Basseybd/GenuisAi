import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  organization: "org-iBkLWvwZsnQ8pz850IaIlJXh",
  project: "proj_i1TxD3Y2jhkVlIl2NvvLYI7I",
});

export async function POST(req: Request) {
  try {
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
