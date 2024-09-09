import { TableVirtuoso } from "react-virtuoso";
import { Table, TableHeader, TableHead, TableRow } from "@components/ui/table";

import { type Pokemon } from "#/types";
import React from "react";
import { PokemonRow } from "../pokemon-row";

type PokemonTableProps = {
  pokemons: Pokemon[];
  onLoadMore: () => void;
};

export const PokemonTable = ({ pokemons, onLoadMore }: PokemonTableProps) => {
  return (
    <div className="box-border h-[500px] w-full max-w-[70vw] overflow-y-auto">
      <Table className="w-full table-fixed">
        <TableHeader className="sticky top-0 z-10 bg-white">
          <TableRow>
            <TableHead>Index</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-end">Details</TableHead>
          </TableRow>
        </TableHeader>
      </Table>

      <TableVirtuoso
        data={pokemons}
        endReached={onLoadMore}
        overscan={10}
        components={{
          Table: (props) => <Table {...props} className="w-full table-fixed" />,
          TableRow: (props) => <TableRow {...props} />,
        }}
        itemContent={(index, pokemon) => (
          <PokemonRow pokemon={pokemon} index={index} />
        )}
      />
    </div>
  );
};
