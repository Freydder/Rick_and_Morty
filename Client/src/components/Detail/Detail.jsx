import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"


export default function Detail () {

    const { id } = useParams();

    const [ character, setCharacter ] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return (
        <>
          <div>
            <div>
              {character.name && (
                <p>
                  <b>Name: </b>
                  {character.name}
                </p>
              )}
              {character.status && (
                <p>
                  <b>Status: </b>
                  {character.status}
                </p>
              )}
              {character.species && (
                <p>
                  <b>Species: </b>
                  {character.species}
                </p>
              )}
              {character.gender && (
                <p>
                  <b>Gender: </b>
                  {character.gender}
                </p>
              )}
              {character.origin && (
                <p>
                  <b>Origin: </b>
                  {character.origin.name}
                </p>
              )}
            </div>
            <img src={character.image} />
          </div>
          <button onClick={() => navigate("/home")}>
            Back to Home
          </button>
        </>
      );
}

