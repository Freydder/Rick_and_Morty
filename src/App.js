import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
// import characters from "./data.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"
import Favorites from "./components/Favorites/Favorites"

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '1234';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

  function onSearch(id) {
    //   axios(`https://rickandmortyapi.com/api/character/${id}`).then(( {data} ) => {
    //     if (data.name) {
    //        setCharacters([data, ...characters]);
    //     } else {
    //        window.alert('¡No hay personajes con este ID!');
    //     }
    //  });

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters([data, ...characters])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  }

  function random() {
    let randomId = Math.ceil(Math.random() * 826);
    onSearch(randomId);
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const location = useLocation();

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      { location.pathname !== "/" && <Nav onSearch={onSearch} random={random} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;

         {/* <div>
            <Nav onSearch={onSearch} />
         </div>
         <div>
            <Cards
               characters={characters} 
               onClose={onClose}
            />
         </div> */}
