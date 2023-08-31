import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav({onSearch}) {   
   return (      
      <nav> 
         <SearchBar onSearch={onSearch} /><br/>
         <Link to ="/about">About</Link><br/>
         <Link to ="/home">Home</Link><br/>
         <Link to ="/favorites">Favorites</Link>
      </nav>      
   );
}