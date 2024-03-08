// app/api/generate/route.ts
import Anthropic from '@anthropic-ai/sdk';
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

export async function POST(req: Request) {
    const { prompt } = await req.json();
    console.log('Request body:', prompt);

    if (!prompt) {
        return new Response('Prompt is required', { status: 400 });
    }

    try {
        const anthropic = new Anthropic({ apiKey: CLAUDE_API_KEY });
        const response = await anthropic.messages.create({
            model: 'claude-2.1',
            max_tokens: 1024,
            messages: [
                { "role": "user", "content": "Hello, world" }
            ]

        });


        console.log('Response:', response);

        // return new Response( { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Something went wrong', { status: 500 });
    }
}