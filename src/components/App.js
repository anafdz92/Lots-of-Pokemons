import React, { useState } from "react";
import PokeList from "./PokeList";
import Pokecuquis from "../data/Pokecuquis";

const App = () => {
  const [item, setItem] = useState(Pokecuquis);

  return (
    <div>
      <PokeList pokeCards={Pokecuquis} />
    </div>
  );
};

export default App;
