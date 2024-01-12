import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonDetail from "./PokemonDetail";
import Pokemon from "./Pokemon";
import Search from "./Search";
import "./Pokemons.css";
import usePokemons from "../hooks/usePokemons";
import Loader from "./Loader";

const Pokemons = () => {
  const { pokemones, masPokemones, viewMore, searchPokemondongo } =
    usePokemons();
  const [show, setShow] = useState({ show: false, pokemon: {} });
  const [search, setSearch] = useState("");

  const showPokemon = (pokemon) => setShow({ show: true, pokemon });

  const hidePokemon = () => {
    setShow({ show: false, pokemon: {} });
    setSearch("");
  };

  const searchPokemon = async (e) => {
    e.preventDefault();
    if (!search) return;
    console.log(search);

    const pokemon = await searchPokemondongo(search);
    setShow({ show: true, pokemon });
  };

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        searchPokemon={searchPokemon}
      />
      <PokemonDetail {...show} hidePokemon={hidePokemon} />
      <InfiniteScroll
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={viewMore}
        loader={<Loader />}
        endMessage={
          <h3 className="titulo" style={{ gridColumn: "1/6" }}>
            Lo siento, no hay más pokemones por mostrar
          </h3>
        }
        className="pokemon-container"
      >
        {pokemones.length &&
          pokemones.map((pokemon) => {
            return (
              <Pokemon
                {...pokemon}
                key={pokemon.id}
                showPokemon={() => showPokemon(pokemon)}
              />
            );
          })}
      </InfiniteScroll>
    </>
  );
};

export default Pokemons;
