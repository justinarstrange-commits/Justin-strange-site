import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  if (!name || typeof name !== "string" || name.trim().length < 1) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  const trimmed = name.trim().slice(0, 60);

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 500,
    messages: [
      {
        role: "user",
        content: `Tell me about the name "${trimmed}". Cover: the language it comes from, the original root word, and what it literally means. Then in one short paragraph, write what that meaning asks of the person who carries it — not as a guarantee, as a direction. Write plainly. No fluff. No bullet points. Short paragraphs. No greeting or sign-off. Just the name, the origin, and what it is asking.`,
      },
    ],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  return NextResponse.json({ meaning: text });
}
