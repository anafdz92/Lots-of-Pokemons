import React from "react";

const Pokemon = (props) => {
  return (
    <article>
      <div>
        <img src={props.url} />
      </div>
      <h2>{props.name}</h2>
      <p>{props.type}</p>
    </article>
  );
};

export default Pokemon;
