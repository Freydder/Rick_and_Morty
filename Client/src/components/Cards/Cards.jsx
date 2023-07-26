import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.container}>
      {characters.map((c) => (
        <Card
          id={c.id}
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          addFav={props.addFav} 
          removeFav={props.removeFav} 
          onClose={() => onClose(c.id)}
          key={c.id}
        />
      ))}
    </div>
  );
}
