import React from "react";

const Pokemon = (props) => {
  const pokeTypes = props.type.map((typeEach, index) => {
    return <li key={index}>{typeEach}</li>;
  });
  return (
    <article>
      <div>
        <img src={props.url} />
      </div>
      <h2>{props.name}</h2>
      <ul>{pokeTypes}</ul>
    </article>
  );
};

export default Pokemon;
