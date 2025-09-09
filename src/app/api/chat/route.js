import OpenAI from "openai";

export const runtime = "edge"; // enables streaming

export async function POST(req) {
  const { message } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini", // ✅ cheap + fast
    messages: [{ role: "user", content: message }],
    stream: true,
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(content));
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream);
}
