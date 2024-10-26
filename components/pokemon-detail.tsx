'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pokemon } from '@/lib/types';
import { formatPokemonId, formatHeight, formatWeight, TYPE_COLORS } from '@/lib/pokemon';

interface PokemonDetailProps {
  pokemon: Pokemon;
}

export function PokemonDetail({ pokemon }: PokemonDetailProps) {
  const { id, name, types, sprites, stats, height, weight, abilities } = pokemon;

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Pokédex
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold capitalize">
              {name}
            </h1>
            <span className="text-2xl text-muted-foreground">
              #{formatPokemonId(id)}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image
                src={sprites.other['official-artwork'].front_default}
                alt={name}
                fill
                className="object-contain p-4"
                priority
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Types</h2>
                <div className="flex gap-2">
                  {types.map(({ type }) => (
                    <Badge
                      key={type.name}
                      style={{
                        backgroundColor: TYPE_COLORS[type.name as keyof typeof TYPE_COLORS],
                        color: 'white'
                      }}
                      className="capitalize"
                    >
                      {type.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Stats</h2>
                <div className="space-y-2">
                  {stats.map(({ base_stat, stat }) => (
                    <div key={stat.name} className="flex items-center">
                      <span className="w-32 capitalize">{stat.name.replace('-', ' ')}:</span>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(base_stat / 255) * 100}%` }}
                        />
                      </div>
                      <span className="w-12 text-right ml-4">{base_stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Height</h2>
                  <p>{formatHeight(height)}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Weight</h2>
                  <p>{formatWeight(weight)}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                <div className="flex flex-wrap gap-2">
                  {abilities.map(({ ability }) => (
                    <Badge key={ability.name} className="capitalize">
                      {ability.name.replace('-', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}