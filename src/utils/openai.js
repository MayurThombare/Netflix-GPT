// utils/openai.js
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const getGeminiResult = async (prompt) => {
    const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant", // ✅ updated model name
                messages: [{ role: "user", content: prompt }],
            }),
        }
    );

    const data = await response.json();

    if (!data.choices) {
        console.error("Groq error:", data);
        throw new Error("Groq API failed");
    }

    return data.choices[0].message.content;
};