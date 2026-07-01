import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy' });

export async function POST(request: Request) {
  try {
    const { subject, level, preset, context } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      // Return mock data for testing UI without an API key
      await new Promise(r => setTimeout(r, 2000)); // fake delay
      return NextResponse.json({
        documents: [
          { title: 'Lesson Plan', content: '# Lesson Plan: ' + subject + '\n\nThis is a mock generated lesson for the ' + level + ' level.\n\n## Section 1\nDiscussing the context: ' + context },
          { title: 'Quiz', content: '# Quiz: ' + subject + '\n\n1. What is the main concept?\n2. Explain the details.' }
        ]
      });
    }

    // Define preset structures
    let structureStr = "";
    if (preset === 'lesson-quiz') {
      structureStr = "1 Lesson Plan and 1 Quiz";
    } else if (preset === 'full-module') {
      structureStr = "2 Lesson Plans, 2 Quizzes, and 1 Assignment";
    } else {
      structureStr = "A Comprehensive Study Guide";
    }

    const prompt = `You are an expert instructional designer. Generate educational materials for the subject: "${subject}".
Educational Level: ${level}.
Structure required: ${structureStr}.
Additional Context: ${context || 'None'}

Return the result STRICTLY as a JSON object with a "documents" array. Each document should have a "title" and "content" (the generated markdown text).
Example:
{
  "documents": [
    { "title": "Lesson 1: Intro", "content": "# Lesson 1\\n\\nContent here..." }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);
      return NextResponse.json(data);
    }
    
    throw new Error('No response text');
  } catch (error: any) {
    console.error('Generation Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
