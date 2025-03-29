import { createAIChatSession } from "../utils/GeminiAi";
import { useEffect, useState } from "react";

const AiResponse = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const chatSession = createAIChatSession();

    if (chatSession) {
      console.log(" Sending message to AI...");

      chatSession
        .sendMessage("Hello, AI! How are you?")
        .then((message) => {
          console.log(" Full AI Response:", message);

          
          const aiText =
            message?.response?.candidates?.[0]?.content?.parts?.[0]?.text || " No valid response from AI.";
          console.log(" AI Extracted Response:", aiText);

          setResponse(aiText);
        })
        .catch((error) => {
          console.error(" AI Error:", error);
          setResponse("Error fetching AI response.");
        });
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded mt-4">
      <h2 className="text-lg font-semibold">AI Response:</h2>
      <p className="text-gray-800">{response || "Waiting for response..."}</p>
    </div>
  );
};

export default AiResponse;
