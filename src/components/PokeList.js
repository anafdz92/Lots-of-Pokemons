import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const items = props.pokeCards.map((pokeCard) => {
    return (
      <li key={pokeCard.id} className="pokeOne">
        <Pokemon
          name={pokeCard.name}
          url={pokeCard.url}
          type={pokeCard.types}
        />
      </li>
    );
  });

  return <div className="pokemonList">{items}</div>;
};

export default PokeList;
