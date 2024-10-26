import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PokemonDetail } from '@/components/pokemon-detail';
import { fetchPokemon, getAllPokemonIds } from '@/lib/pokemon';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const pokemon = await fetchPokemon(parseInt(params.id));
    return {
      title: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} | Pokédex`,
      description: `View details about ${pokemon.name} including stats, types, and more.`,
    };
  } catch {
    return {
      title: 'Pokemon Not Found | Pokédex',
      description: 'The requested Pokemon could not be found.',
    };
  }
}

export async function generateStaticParams() {
  const ids = await getAllPokemonIds();
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

export default async function PokemonPage({ params }: Props) {
  try {
    const pokemon = await fetchPokemon(parseInt(params.id));
    return <PokemonDetail pokemon={pokemon} />;
  } catch {
    notFound();
  }
}