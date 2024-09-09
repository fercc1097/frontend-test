"use client";
import { usePokemonList } from "../apiHooks";
import { useIsMounted } from "../hooks/useIsMounted";
import { PokemonTable } from "./_components/pokemon-list-table";

const HomePage = () => {
  const isMounted = useIsMounted();

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePokemonList();

  const allPokemons = data ? data.pages.flatMap((d) => d.results) : [];

  const handleLoadMore = async () => {
    if (hasNextPage && !isFetchingNextPage) {
      await fetchNextPage();
    }
  };

  if (isLoading || !isMounted) return <div className="p-4">Loading...</div>;

  if (error) {
    return (
      <div className="p-4">
        Error:{" "}
        {error instanceof Error ? error.message : "Unknown error occurred"}
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-100 text-slate-900">
      <h1 className="text-center text-3xl font-bold">Pokedex</h1>
      <PokemonTable pokemons={allPokemons} onLoadMore={handleLoadMore} />
    </main>
  );
};

export default HomePage;
