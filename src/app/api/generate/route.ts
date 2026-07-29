import { generateScreens } from "@/lib/ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || prompt.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a more detailed description." },
        { status: 400 }
      );
    }

    const result = await generateScreens(prompt);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Generation failed" },
      { status: 500 }
    );
  }
}
