'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { POKEMON_TYPES, TYPE_COLORS, type PokemonType } from '@/lib/pokemon';

interface TypeFilterProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

export function TypeFilter({ selectedType, onTypeSelect }: TypeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Badge
        onClick={() => onTypeSelect('all')}
        style={{
          backgroundColor: selectedType === 'all' ? '#4A5568' : '#718096',
          color: 'white',
          opacity: selectedType === 'all' ? 1 : 0.7,
        }}
        className="cursor-pointer hover:opacity-100 transition-colors shadow-sm"
      >
        All Types
      </Badge>
      {POKEMON_TYPES.map((type) => (
        <Badge
          key={type}
          onClick={() => onTypeSelect(type)}
          style={{
            backgroundColor: TYPE_COLORS[type],
            color: 'white',
            opacity: selectedType === type ? 1 : 0.7,
          }}
          className="cursor-pointer hover:opacity-100 transition-colors capitalize shadow-sm"
        >
          {type}
        </Badge>
      ))}
    </div>
  );
}