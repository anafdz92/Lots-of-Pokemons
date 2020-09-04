import React, { useState } from "react";
import PokeList from "./PokeList";
import Pokecuquis from "../data/Pokecuquis";
import Logo from "../images/Pokemon.png";

const App = () => {
  const [item, setItem] = useState(Pokecuquis);

  return (
    <div className="mainList">
      <div className="title">
        <img src={Logo} alt="Pokemon" title="Pokemon" className="titleImg" />
      </div>
      <PokeList pokeCards={Pokecuquis} />
    </div>
  );
};

export default App;
