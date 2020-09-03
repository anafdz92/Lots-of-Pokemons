import React from "react";

const Pokemon = (props) => {
  console.log(props);
  const pokeTypes = props.type.map((typeEach, index) => {
    return (
      <li className="smallList" key={index}>
        {typeEach}
      </li>
    );
  });
  return (
    <article className="pokeContent">
      <div>
        <img src={props.url} alt="Pokemon" />
      </div>
      <h2>{props.name}</h2>
      <ul className="listContainer">{pokeTypes}</ul>
    </article>
  );
};

// Pokemon.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   species: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   episode: PropTypes.string.isRequired,
// };
export default Pokemon;
