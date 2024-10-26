'use client';

import { Button } from '@/components/ui/button';
import { POKEMON_TYPES, getTypeStyle } from '@/lib/pokemon';

interface TypeFilterProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

export function TypeFilter({ selectedType, onTypeSelect }: TypeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button
        key="all"
        onClick={() => onTypeSelect('all')}
        style={getTypeStyle('all', selectedType === 'all')}
        className="hover:opacity-90 active:opacity-100 min-w-[80px]"
      >
        All Types
      </Button>
      {POKEMON_TYPES.map((type) => (
        <Button
          key={type}
          onClick={() => onTypeSelect(type)}
          style={getTypeStyle(type)}
          className="capitalize hover:opacity-90 active:opacity-100 min-w-[80px]"
        >
          {type}
        </Button>
      ))}
    </div>
  );
}
