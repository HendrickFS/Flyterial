import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy' });

export async function POST(request: Request) {
  try {
    const { subject, level, preset, context, customStructure, lang } = await request.json();

    const targetLanguage = lang === 'pt' ? 'Brazilian Portuguese (pt-BR)' : 'English (US)';

    const isMock = !process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your-gemini-api-key-here' || process.env.GEMINI_API_KEY === 'your_api_key_here';

    if (isMock) {
      // Return mock data for testing UI without an API key
      await new Promise(r => setTimeout(r, 2000)); // fake delay
      if (lang === 'pt') {
        return NextResponse.json({
          documents: [
            { title: 'Plano de Aula', content: '# Plano de Aula: ' + subject + '\n\nEsta é uma simulação de aula gerada para o nível ' + level + '.\n\n## Seção 1\nDiscussão sobre o contexto: ' + context },
            { title: 'Questionário', content: '# Questionário: ' + subject + '\n\n1. Qual é o conceito principal?\n2. Explique os detalhes.' }
          ]
        });
      }
      return NextResponse.json({
        documents: [
          { title: 'Lesson Plan', content: '# Lesson Plan: ' + subject + '\n\nThis is a mock generated lesson for the ' + level + ' level.\n\n## Section 1\nDiscussing the context: ' + context },
          { title: 'Quiz', content: '# Quiz: ' + subject + '\n\n1. What is the main concept?\n2. Explain the details.' }
        ]
      });
    }

    // Define preset structures
    let structureStr = "";
    if (customStructure) {
      structureStr = customStructure;
    } else if (preset === 'lesson-quiz') {
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

Output language requirement: All generated text and document content MUST be strictly written in ${targetLanguage}.

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
  } catch (error) {
    console.error('Generation Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown generation error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
