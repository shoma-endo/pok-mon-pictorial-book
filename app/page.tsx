import { PokemonList } from '@/components/pokemon-list';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokédex</h1>
      <PokemonList />
    </main>
  );
}