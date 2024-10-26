'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@/lib/types';
import { getTypeStyle, formatPokemonId } from '@/lib/pokemon';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
              <span className="text-sm text-muted-foreground">#{formatPokemonId(pokemon.id)}</span>
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={pokemon.id <= 20}
              />
            </div>
            <div className="flex gap-2">
              {pokemon.types.map(({ type }) => (
                <Badge
                  key={`${pokemon.id}-${type.name}`}
                  style={getTypeStyle(type.name)}
                  className="capitalize"
                >
                  {type.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}