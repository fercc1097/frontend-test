import { useInfiniteQuery } from "@tanstack/react-query";
import { type PokemonResponse } from "../types";
import { pokemonListSchema } from "../utils/validators/pokemon-schema";
import { z } from "zod";

const fetchPokemonList = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
}: {
  pageParam?: string;
}) => {
  try {
    const res = await fetch(pageParam);

    if (!res.ok) {
      throw new Error("Failed to fetch Pokémon data");
    }

    const data = (await res.json()) as PokemonResponse;

    const parsedData = pokemonListSchema.parse(data);

    return parsedData;
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      throw new Error("Validation failed");
    } else if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

export const usePokemonList = () => {
  return useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: ({ pageParam }) => fetchPokemonList({ pageParam }),
    getNextPageParam: (lastPage) => lastPage.next ?? null,
    initialPageParam: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
  });
};
