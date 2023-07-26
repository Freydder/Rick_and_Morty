import React from "react";
import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCard, orderCard } from "../../redux/actions";

export function Favorites({ favorites }) {
  
  const dispatch = useDispatch();
  
  function handleOrder (e) {
    dispatch(orderCard(e.target.value))
  }

  function handleFilter (e) {
    dispatch(filterCard(e.target.value))
  }

  return (
    <>
    <select onChange={handleOrder}>
      <option value="">Order:</option>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
    </select>
    <select onChange={handleFilter}>
      <option value="">filter:</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>
    </select>
      {favorites.length === 0 ? (
        <p>
          ¡Agrega un favorito!
        </p>
      ) : (
        <>
          {favorites.map((e, i) => (
            <Card
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              key={i++}
            />
          ))}
        </>
      )}
    </>
  );
}


function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);

