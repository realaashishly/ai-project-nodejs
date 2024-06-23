import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

process.stdin.addListener("data", async (input) => {
    const userInput = input.toString().trim();

    const response = await openai.chat.completions.create({
        model: "gpt-4-0125-preview",
        messages: [
            {
                role: "system",
                content: "You respond with a greeting in the beginning.",
            },
            {
                role: "user",
                content: userInput,
            },
        ],
    });

    console.log(response.choices[0].message.content);
});
