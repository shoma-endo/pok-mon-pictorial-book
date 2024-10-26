import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface PokemonErrorProps {
  onRetry: () => void;
}

export function PokemonError({ onRetry }: PokemonErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Failed to Load Pokemon</h2>
      <p className="text-muted-foreground mb-4">
        There was an error loading the Pokemon data. Please try again.
      </p>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  );
}