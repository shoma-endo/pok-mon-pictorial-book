'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Pokemon } from '@/lib/types';
import { PokemonCard } from './pokemon-card';
import { fetchPokemonBatch, getTypeStyle } from '@/lib/pokemon';
import { useInView } from 'react-intersection-observer';
import { Input } from '@/components/ui/input';
import { POKEMON_TYPES } from '@/lib/pokemon';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { PokemonLoading } from './pokemon-loading';
import { BATCH_SIZE, POKEMON_LIMIT } from '@/lib/config';

export function PokemonList() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [hasMore, setHasMore] = useState(true);
  const isInitialLoad = useRef(true);
  const currentOffset = useRef(0);
  const loadingRef = useRef(false);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  const loadNextBatch = useCallback(async () => {
    if (!hasMore || loadingRef.current) return;
    
    try {
      loadingRef.current = true;
      setIsLoading(true);
      const nextOffset = currentOffset.current;
      
      if (nextOffset >= POKEMON_LIMIT) {
        setHasMore(false);
        return;
      }

      const remainingPokemon = POKEMON_LIMIT - nextOffset;
      const currentBatchSize = Math.min(BATCH_SIZE, remainingPokemon);
      const newBatch = await fetchPokemonBatch(nextOffset + 1, currentBatchSize);
      
      setPokemon(prev => [...prev, ...newBatch.pokemon]);
      currentOffset.current += currentBatchSize;
      
      if (currentOffset.current >= POKEMON_LIMIT) {
        setHasMore(false);
      }
    } catch (err) {
      setError('Failed to load Pokemon');
      console.error('Failed to fetch Pokemon:', err);
    } finally {
      setIsLoading(false);
      loadingRef.current = false;
      isInitialLoad.current = false;
    }
  }, [hasMore]);

  useEffect(() => {
    if (isInitialLoad.current) {
      loadNextBatch();
    }
  }, [loadNextBatch]);

  useEffect(() => {
    if (inView && !isInitialLoad.current && hasMore && !loadingRef.current) {
      loadNextBatch();
    }
  }, [inView, loadNextBatch, hasMore]);

  const filteredPokemon = pokemon.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.id.toString().includes(searchQuery);
    const matchesType = selectedType === 'all' || 
                       p.types.some(({ type }) => type.name === selectedType);
    return matchesSearch && matchesType;
  });

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Input
          type="search"
          placeholder="Search Pokémon by name or number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md mx-auto"
        />
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge
            onClick={() => setSelectedType('all')}
            className={cn(
              'cursor-pointer hover:opacity-80 capitalize',
            )}
          >
            All Types
          </Badge>
          {POKEMON_TYPES.map((type) => (
            <Badge
              key={type}
              onClick={() => setSelectedType(type)}
              className={cn(
                'cursor-pointer hover:opacity-80 capitalize',
              )}
              style={getTypeStyle(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      {isInitialLoad.current ? (
        <PokemonLoading />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPokemon.map((pokemon) => (
              <PokemonCard 
                key={`pokemon-${pokemon.id}`} 
                pokemon={pokemon} 
              />
            ))}
          </div>

          {!isLoading && filteredPokemon.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No Pokémon found matching your criteria
            </div>
          )}
          
          {hasMore && !searchQuery && selectedType === 'all' && (
            <div ref={ref} className="py-8 flex justify-center">
              {isLoading && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-muted-foreground">Loading more Pokémon...</span>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}