import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAIResponse(message) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are ET Smart Concierge, an AI financial assistant for Indian users.

Your role:
- Understand user's financial goals
- Suggest investments (SIP, mutual funds)
- Recommend insurance and savings plans
- Ask follow-up questions
- Keep answers simple and helpful
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    return "Error connecting to AI.";
  }
}
