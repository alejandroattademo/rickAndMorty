import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";

import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

function Favorites() {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const favorites = useSelector((state) => state.myFavorites);

  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascendent</option>
        <option value="D">Descendent</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="AllCharacters">AllCharacters</option>
      </select>
      {favorites.map((character) => {
        return (
          <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            id={character.id}
            key={character.id}
          />
        );
      })}
    </>
  );
}

export default Favorites;
