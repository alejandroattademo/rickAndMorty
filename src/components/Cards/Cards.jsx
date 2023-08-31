import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {
   //console.log(characters)   
   return (
   <div className = {style.container}>
      {characters.map((character) => {
         return (
            <Card                
               name = {character.name}               
               species = {character.species}
               gender = {character.gender}
               origin = {character.origin.name}               
               image = {character.image}
               onClose = {onClose}
               id = {character.id}
               key = {character.id}
            />   
            )})}
   </div>);
}
