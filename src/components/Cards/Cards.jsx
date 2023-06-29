import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.container}>
      {characters.map((c) => (
        <Card
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          id={c.id}
          addFav={props.addFav} 
          removeFav={props.removeFav} 
          key={c.id}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
