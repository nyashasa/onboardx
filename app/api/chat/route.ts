import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Ensure the request has messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    // Add system message to customize the assistant behavior
    const systemMessage = {
      role: 'system',
      content: 'You are an AI assistant for OnboardX, a unified client onboarding platform. You help users with onboarding processes, workflows, and provide guidance on using the platform effectively. Be concise, helpful, and knowledgeable about onboarding best practices.',
    };

    // Create a chat completion
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...messages],
    });

    // Return the completion
    return NextResponse.json({ message: completion.choices[0].message });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
} 