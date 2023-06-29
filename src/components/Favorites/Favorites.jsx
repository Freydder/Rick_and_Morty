import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";

export function Favorites({ favorites }) {

  return (
    <>
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

