import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      let {value} = event.target;
      setId(value);
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => props.onSearch(id)}>Agregar</button>
         <button onClick={() => props.random(id)}>Random</button>
      </div>
   );
}
