export function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2 justify-center py-4">
      <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-muted-foreground font-medium">Loading more Pokémon...</span>
    </div>
  );
}