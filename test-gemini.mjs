import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  console.log("Testing Gemini API Connection...");
  console.log("Using API Key starting with:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.substring(0, 5) + "..." : "None");
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Generate a short paragraph explaining the water cycle for a 5th grader.',
    });
    console.log("\n✅ Success! Gemini returned:\n");
    console.log(response.text);
  } catch (error) {
    console.error("\n❌ Error connecting to Gemini:");
    console.error(error.message);
    if (error.message.includes('API key not valid')) {
      console.log("\nMake sure you have replaced 'your-gemini-api-key-here' in the .env file with your real key!");
    }
  }
}

run();
