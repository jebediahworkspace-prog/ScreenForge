import { createXai } from "@ai-sdk/xai";
import { generateObject } from "ai";
import { z } from "zod";

const xai = createXai({
  apiKey: process.env.XAI_API_KEY,
});

const ScreenSchema = z.object({
  appName: z.string(),
  screens: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      html: z.string(),
    })
  ),
});

export async function generateScreens(prompt: string) {
  const { object } = await generateObject({
    model: xai("grok-3"),
    schema: ScreenSchema,
    prompt: `You are an expert mobile UI designer.

User request: "` + prompt + `"

Generate 4 key screens for this mobile app.

Rules for html:
- Use only Tailwind CSS classes
- Start with a root <div class="min-h-full bg-white p-4 ...">
- Make it look modern and realistic
- Include fake realistic content
- Do NOT include <html>, <head> or <body> tags
`,
  });

  return object;
}
