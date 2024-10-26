'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function PokemonLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={`skeleton-${index}`}>
          <CardHeader>
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </CardHeader>
          <CardContent>
            <Skeleton className="aspect-square mb-4" />
            <div className="flex gap-2 justify-center">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}