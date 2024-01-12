import React from "react";

const Pokemon = ({ id, name, img, showPokemon }) => {
  return (
    <div className="pokemon-card" onClick={showPokemon} key={id}>
      <img src={img} alt={name} className="pokemon-imagen" />
      <p className="pokemon-titulo">
        <span>#{id}</span>
        <span>{name}</span>
      </p>
    </div>
  );
};

export default Pokemon;
