import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  
  useEffect(() => {
    props.myFavorites &&
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true); 
      }
    });
  }, [props.myFavorites]);
  
  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav({
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
        id: props.id,
      });
    }
  }
  
  return (
    <div className={style.container}>
     {isFav ? (
       <button onClick={handleFavorite}>❤️</button>
     ) : (
       <button onClick={handleFavorite}>🤍</button>
     )}
      <button className={style.button} onClick={props.onClose}>
        X
      </button>
      <Link
        to={`/detail/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2 className={style.h2}>{props.name}</h2>
      </Link>
      <h3 className={style.h3}>{props.species}</h3>
      <h3 className={style.h3}>{props.gender}</h3>
      <img className={style.img} src={props.image} alt="" />
    </div>
  );
}


function mapStateToProps (state) {
  return {
     myFavorites: state.myFavorites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addFav: function (personaje) {
      dispatch(addFav(personaje));
    },
    
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);