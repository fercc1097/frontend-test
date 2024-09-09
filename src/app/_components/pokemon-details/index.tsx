import React from "react";
import { type PokemonDetails } from "@/types";
import Image from "next/image";

const Pokedex = ({ pokemon }: { pokemon: PokemonDetails }) => {
  return (
    <div className="mx-auto mt-12 w-[850px] max-w-[850px]" id="pokedex">
      {/* Left Side */}
      <div className="relative float-left h-[500px] w-[400px]" id="left">
        {/* Logo (Not included, but place for it) */}
        <div id="logo"></div>

        {/* Background Curves */}
        <div
          className="h-[80px] w-[400px] rounded-tl-[30px] bg-red-800 shadow-[10px_9px_#5e0000]"
          id="bg_curve1_left"
        ></div>
        <div
          className="absolute bottom-0 right-0 h-[451px] w-[216px] rounded-tl-[85px_60px] bg-[#c00d0d]"
          id="curve2_left"
        ></div>

        <div
          className="h-[420px] w-[400px] rounded-bl-[30px] bg-[#c00d0d] shadow-[-10px_9px_#5e0000]"
          id="bg_curve2_left"
        ></div>

        {/* Main Curves */}
        <div
          className="absolute left-0 top-0 flex h-[85px] w-[201px] rounded-br-[85px_60px] rounded-tl-[30px] bg-red-800 pl-[15px] pt-[15px] shadow-[-10px_9px_#5e0000]"
          id="curve1_left"
        >
          <div className="relative h-[60px] w-[60px] rounded-full border-[5px] border-white bg-gradient-to-b from-[#05fbfb] to-[#29abe3] shadow-lg">
            <div className="absolute ml-[15px] mt-3 h-[18px] w-[30px] rounded-br-[9px] rounded-tl-[15px] bg-white opacity-60"></div>
          </div>
          <div className="ml-2 h-[20px] w-[20px] rounded-full bg-gradient-to-b from-[#fb7b7b] to-[#fb0505] shadow-md"></div>
          <div className="ml-2 h-[20px] w-[20px] rounded-full bg-gradient-to-b from-[#fbfb9b] to-[#fbfb05] shadow-md"></div>
          <div className="ml-2 h-[20px] w-[20px] rounded-full bg-gradient-to-b from-[#b0fb7b] to-[#50fb05] shadow-md"></div>
        </div>

        {/* Screen */}
        <div
          className="absolute left-[19px] top-[130px] h-[245px] w-[315px] rounded-lg bg-gray-400 p-[20px]"
          id="screen"
        >
          <div
            className="mb-4 flex items-center justify-between"
            id="topPicture"
          >
            <div className="h-[8px] w-[8px] rounded-full border-[1px] border-black bg-[#c00d0d]"></div>
            <div className="h-[8px] w-[8px] rounded-full border-[1px] border-black bg-[#c00d0d]"></div>
          </div>
          <div
            className="h-[175px] w-[254px] rounded-lg border-4 border-gray-700 bg-white"
            id="picture"
          >
            <Image
              src={pokemon?.sprites?.front_default ?? ""}
              alt={pokemon.name}
              fill
            />
          </div>
          <div className="flex items-center">
            <div className="mr-2 mt-1 h-[18px] w-[18px] rounded-full bg-[#c00d0d] shadow-sm"></div>
            <div className="grid grid-cols-4 gap-1">
              <div className="h-[3px] w-[3px] rounded-full bg-gray-700"></div>
              <div className="h-[3px] w-[3px] rounded-full bg-gray-700"></div>
              <div className="h-[3px] w-[3px] rounded-full bg-gray-700"></div>
              <div className="h-[3px] w-[3px] rounded-full bg-gray-700"></div>
            </div>
          </div>
        </div>

        {/* Big Blue Button */}
        <div className="absolute left-[30px] top-[395px] h-[50px] w-[50px] rounded-full bg-blue-600 shadow-inner"></div>

        {/* Bar Buttons */}
        <div className="absolute left-[100px] top-[405px] h-[13px] w-[50px] rounded-full bg-green-500 shadow-inner"></div>
        <div className="absolute left-[165px] top-[405px] h-[13px] w-[50px] rounded-full bg-red-500 shadow-inner"></div>

        {/* D-Pad */}
        <div className="absolute left-[230px] top-[394px] h-[90px] w-[90px]">
          <div className="absolute left-[30px] top-0 h-[30px] w-[30px] rounded-t-lg bg-black shadow-sm"></div>
          <div className="absolute left-0 top-[30px] h-[30px] w-[30px] rounded-l-lg bg-black shadow-sm"></div>
          <div className="absolute right-0 top-[30px] h-[30px] w-[30px] rounded-r-lg bg-black shadow-sm"></div>
          <div className="absolute bottom-0 left-[30px] h-[30px] w-[30px] rounded-b-lg bg-black shadow-sm"></div>
          <div className="absolute left-[30px] top-[30px] h-[30px] w-[30px] rounded-full bg-black shadow-inner"></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative float-left h-[500px] w-[350px]" id="right">
        {/* Background Red Curves */}
        <div
          className="absolute right-0 top-0 h-[100px] w-[350px] rounded-br-[30px] bg-[#c00d0d] shadow-[10px_9px_#5e0000]"
          id="bg_curve1_right"
        ></div>
        <div
          className="absolute bottom-0 right-0 h-[420px] w-[350px] rounded-tr-[30px] bg-[#c00d0d] shadow-[10px_9px_#5e0000]"
          id="bg_curve2_right"
        ></div>

        {/* Stats */}
        <div className="absolute left-[25px] top-[130px] h-[175px] w-[280px] rounded-lg bg-green-500 p-2 text-sm text-white shadow-inner">
          <strong>Name:</strong> {pokemon.name}
          <br />
          <strong>Type:</strong>{" "}
          {pokemon.types.map((type) => type.type.name).join(", ")}
          <br />
          <strong>Height:</strong> {pokemon.height} ft.
          <br />
          <strong>Weight:</strong> {pokemon.weight} lbs.
          <br />
        </div>

        {/* Blue Buttons */}
        <div className="absolute left-[49px] top-[315px] flex space-x-2">
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
        </div>

        <div className="absolute left-[49px] top-[355px] flex space-x-2">
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
          <div className="h-[35px] w-[45px] rounded-lg bg-blue-600 shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
