'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search Pokémon by name or number..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 bg-white dark:bg-gray-950 border-2 focus-visible:ring-2 focus-visible:ring-primary/50 transition-all"
      />
    </div>
  );
}