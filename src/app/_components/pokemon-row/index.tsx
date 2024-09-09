import { TableCell } from "@components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { usePokemonDetails } from "@/apiHooks";
import { type PokemonDetails, type Pokemon } from "#/types";
import Image from "next/image";

type PokemonRowProps = {
  pokemon: Pokemon;
  index: number;
};

export const PokemonRow = ({ pokemon, index }: PokemonRowProps) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null,
  );
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { data, isLoading, error } = usePokemonDetails(pokemon.name);

  useEffect(() => {
    if (inView && !hasFetched) {
      if (data && !error) {
        setPokemonDetails(data);
        setHasFetched(true);
      }
    }
  }, [inView, data, error, hasFetched]);

  return (
    <>
      <TableCell>{index + 1}</TableCell>

      <TableCell ref={ref}>
        {isLoading || !pokemonDetails ? (
          <Skeleton className="h-[50px] w-[50px]" />
        ) : (
          <Image
            src={pokemonDetails?.sprites?.front_default ?? ""}
            alt={pokemon.name}
            className="h-[50px] w-[50px]"
            width={50}
            height={50}
          />
        )}
      </TableCell>

      <TableCell>{pokemon.name}</TableCell>

      <TableCell>
        {isLoading || !pokemonDetails ? (
          <Skeleton className="h-[20px] w-[100px] rounded-full" />
        ) : (
          <div className="flex space-x-2">
            {pokemonDetails.types.map(
              (
                type: { slot: number; type: { name: string; url: string } },
                idx: number,
              ) => (
                <span key={idx} className="capitalize">
                  {type.type.name}
                </span>
              ),
            )}
          </div>
        )}
      </TableCell>

      <TableCell className="text-end">
        <Link href={`/pokemon/${pokemon.name}`}>
          <Button>View</Button>
        </Link>
      </TableCell>
    </>
  );
};
