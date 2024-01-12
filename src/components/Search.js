import "./Search.css";
import React from "react";

const Search = ({ search, setSearch, searchPokemon }) => {
  return (
    <>
      <h3 className="titulo">Todos los pokemones, elige tu favorito...</h3>
      <form className="container-buscar" onSubmit={searchPokemon}>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-buscar"
        />
        <button className="btn-buscar" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Search;
