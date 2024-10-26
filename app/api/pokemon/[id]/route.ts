import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${params.id}`);
    
    if (!response.ok) {
      throw new Error(`Pokemon API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching Pokemon ${params.id}:`, error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch Pokemon data' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}