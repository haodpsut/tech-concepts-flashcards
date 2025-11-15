import { GoogleGenAI, Type } from "@google/genai";
import { Explanation } from '../types';

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    englishExplanation: {
      type: Type.STRING,
      description: "A concise, flashcard-style explanation in English, under 50 words."
    },
    vietnameseExplanation: {
      type: Type.STRING,
      description: "A concise, flashcard-style explanation in Vietnamese, under 50 words."
    }
  },
  required: ["englishExplanation", "vietnameseExplanation"]
};

export async function getConceptExplanation(conceptName: string, apiKey: string): Promise<Explanation> {
  if (!apiKey) {
    throw new Error("API key is missing.");
  }
  
  const ai = new GoogleGenAI({ apiKey });

  try {
    const prompt = `Explain the technical concept "${conceptName}" in a concise, flashcard-style format. The explanation should be easy to understand for a researcher in AI, Quantum Computing, and Satellite Networks. Provide explanations in both English and Vietnamese. Keep each explanation brief and to the point.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.5,
      },
    });

    const jsonText = response.text.trim();
    const parsedJson = JSON.parse(jsonText);

    return {
      englishExplanation: parsedJson.englishExplanation || "No English explanation found.",
      vietnameseExplanation: parsedJson.vietnameseExplanation || "No Vietnamese explanation found."
    };

  } catch (error) {
    console.error("Error fetching explanation from Gemini API:", error);
    if (error instanceof Error && error.message.includes('API key not valid')) {
        throw new Error('The provided API Key is not valid. Please check and try again.');
    }
    throw new Error(`Failed to generate explanation for "${conceptName}". Please try again.`);
  }
}
