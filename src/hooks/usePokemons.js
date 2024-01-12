import { useEffect, useState } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

const usePokemons = () => {
  const [pokemones, setPokemones] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [viewMore, setViewMore] = useState(true);

  const fetchPokemons = async (url) => {
    const res = await fetch(url);
    const poke = await res.json();

    const abilities = poke.abilities.map((a) => a.ability.name);
    const stats = poke.stats.map((s) => {
      return { name: s.stat.name, base: s.base_stat };
    });
    const types = poke.types.map((t) => t.type.name);

    return {
      id: poke.id,
      name: poke.name,
      img:
        poke.sprites.other.dream_world.front_default ||
        poke.sprites.front_default,
      abilities,
      stats,
      types,
    };
  };

  const getPokemons = async (url = URL_DEFAULT) => {
    const res = await fetch(url);
    const { results, next } = await res.json();
    setPokemones(results);

    const newPokemones = await Promise.all(
      results.map((pokemon) => fetchPokemons(pokemon.url))
    );

    return { next, newPokemones };
  };

  const obtenerPokemones = async () => {
    const { next, newPokemones } = await getPokemons();
    setPokemones(newPokemones);
    setNextUrl(next);
  };

  const masPokemones = async () => {
    const { next, newPokemones } = await getPokemons(nextUrl);
    setPokemones([...pokemones, ...newPokemones]);
    next === null && setViewMore(false);
    setNextUrl(next);
  };

  const searchPokemondongo = async (search) => {
    const url = `${URL_ENDPOINT}${search.toLocaleLowerCase()}`;
    return await fetchPokemons(url);
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);
  return {
    pokemones,
    masPokemones,
    viewMore,
    searchPokemondongo,
  };
};

export default usePokemons;
