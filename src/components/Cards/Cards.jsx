import Card from "../Card/Card.jsx";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map((character) => {
        return (
          <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
            id={character.id}
            key={character.id}
          />
        );
      })}
    </div>
  );
}
