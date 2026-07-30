import OpenAI from "openai";

export const suggestTask = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const client = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
  {
    role: "system",
    content: `
You are TaskMatrix AI Assistant.

Break every project into 5 to 8 actionable tasks.

For each task provide:

### Task Name
Priority:
Description:

Keep descriptions under two lines.

Return everything in Markdown.
Do not ask questions.
`,
  },

  {
    role: "user",
    content: prompt,
  },
],
  
    
      temperature: 0.7,
      max_tokens: 700,
    });

    return res.status(200).json({
      success: true,
      suggestion: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};