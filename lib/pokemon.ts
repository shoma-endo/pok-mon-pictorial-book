import { Pokemon } from './types';
import { POKEMON_API_BASE_URL } from './config';

export interface PokemonBatch {
  startId: number;
  endId: number;
  pokemon: Pokemon[];
}

// Add delay between requests to avoid rate limiting
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      await delay(1000); // Wait 1 second between retries
    } catch (error) {
      if (i === retries - 1) throw error;
      await delay(1000);
    }
  }
  throw new Error(`Failed to fetch after ${retries} retries`);
}

export async function fetchPokemonBatch(
  startId: number,
  batchSize: number
): Promise<PokemonBatch> {
  try {
    const pokemonPromises = Array.from({ length: batchSize }, async (_, i) => {
      const id = startId + i;
      try {
        await delay(100 * i); // Stagger requests to avoid rate limiting
        const response = await fetchWithRetry(
          `${POKEMON_API_BASE_URL}/pokemon/${id}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Failed to fetch Pokemon ${id}:`, error);
        return null;
      }
    });

    const results = await Promise.all(pokemonPromises);
    const validResults = results.filter(
      (pokemon): pokemon is Pokemon => pokemon !== null
    );

    return {
      startId,
      endId: startId + batchSize - 1,
      pokemon: validResults,
    };
  } catch (error) {
    console.error('Failed to fetch Pokemon batch:', error);
    throw error;
  }
}

export const POKEMON_TYPES = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
] as const;

export const TYPE_COLORS = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
} as const;

export interface TypeButtonStyle {
  backgroundColor: string;
  color: string;
  opacity: number;
  transition: string;
  border: string;
  fontWeight: number;
}

export function getTypeStyle(
  type: string,
  isSelected: boolean = false
): TypeButtonStyle {
  if (type === 'all') {
    return {
      backgroundColor: isSelected ? '#4A5568' : '#718096',
      color: 'white',
      opacity: isSelected ? 1 : 0.7,
      transition: 'all 0.2s ease',
      border: 'none',
      fontWeight: isSelected ? 600 : 400,
    };
  }

  const baseColor = TYPE_COLORS[type as keyof typeof TYPE_COLORS];
  return {
    backgroundColor: baseColor,
    color: 'white',
    opacity: isSelected ? 1 : 0.7,
    transition: 'all 0.2s ease',
    border: 'none',
    fontWeight: isSelected ? 600 : 400,
  };
}

export function formatPokemonId(id: number): string {
  return id.toString().padStart(3, '0');
}

export function formatHeight(height: number): string {
  return `${(height / 10).toFixed(1)}m`;
}

export function formatWeight(weight: number): string {
  return `${(weight / 10).toFixed(1)}kg`;
}

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const response = await fetchWithRetry(
    `${POKEMON_API_BASE_URL}/pokemon/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon ${id}`);
  }
  return response.json();
}

export async function getAllPokemonIds(limit: number = 151): Promise<number[]> {
  return Array.from({ length: limit }, (_, i) => i + 1);
}
