"use client";
import Modal from "../../../../components/modal";
import React from "react";
import Pokedex from "@/app/_components/pokemon-details";
import { usePokemonDetails } from "@/apiHooks";

const Page = ({ params }: { params: { id: string } }) => {
  const { data, isLoading, error } = usePokemonDetails(params.id);
  return (
    <Modal>
      {isLoading ? (
        <div className="p-4">Loading...</div>
      ) : error ? (
        <div className="p-4">
          Error:{" "}
          {error instanceof Error ? error.message : "Unknown error occurred"}
        </div>
      ) : (
        data && <Pokedex pokemon={data} />
      )}
    </Modal>
  );
};

export default Page;
