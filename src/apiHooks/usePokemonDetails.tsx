// src/hooks/usePokemonDetails.ts
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { type PokemonDetails } from "../types";

const pokemonDetailsSchema = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    front_default: z.string().nullable(),
  }),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({
        name: z.string(),
        url: z.string(),
      }),
    }),
  ),
  height: z.number(),
  weight: z.number(),
});

const fetchPokemonDetails = async (name: string): Promise<PokemonDetails> => {
  try {
    if (!name) {
      throw new Error("No Pokémon name provided");
    }
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      throw new Error("Failed to fetch Pokémon details");
    }

    const data: PokemonDetails = (await res.json()) as PokemonDetails;
    const parsedData = pokemonDetailsSchema.parse(data);

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

export const usePokemonDetails = (name: string) => {
  return useQuery({
    queryKey: ["pokemonDetails", name],
    queryFn: () => fetchPokemonDetails(name),
    initialData: null,
  });
};
