import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(" VITE_GEMINI_API_KEY is missing in .env file.");
}

let genAI, model;

try {
  genAI = new GoogleGenerativeAI(apiKey);

  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
} catch (error) {
  console.error(" Error initializing Gemini AI:", error);
}

export const createAIChatSession = () => {
  if (!model) {
    return null;
  }

  return model.startChat({
    generationConfig: {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
    history: [],
  });
};
