import style from './App.module.css';
import { About, Cards, Detail, Favorites, Form, Nav } from './components';

import axios from 'axios';
import { useState, useEffect} from "react";
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';

function App() {  

   const {pathname} = useLocation();
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const EMAIL = "theEmail@gmail.com";
   const PASSWORD = "thePA5";

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }              
   }

   useEffect(() => {
      !access && navigate('/');      
   }, [access]);

   const onSearch = (id) => {

      if (id > 0 && id < 827){
         const URL = 'https://rym2-production.up.railway.app/api';         
         const KEY = '?key=henrym-leonardoabaranelli';

         axios(`${URL}/character/${id}/${KEY}`).then(({ data }) => {
            if (data.name && !characters.some(char => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);               
            }
         });
      }   
      else{
         window.alert('¡No hay personajes con este ID!');            
      }
   }

   const onClose = (id) => {      
      setCharacters(characters.filter((char) => char.id !== id));
   }   
   
   return (          
      <div className = {style.App}> 
         {pathname !== "/" && <Nav onSearch={onSearch} /> }
         <Routes>      
            <Route path = "/" element = {<Form login={login}/>} />
            <Route path = "/home" element = {<Cards characters={characters} onClose={onClose}/>}/>         
            <Route path = "/about" element = {<About />}/>
            <Route path = "/detail/:id" element ={<Detail />}/>            
            <Route path = "/favorites" element = {<Favorites />}/>
         </Routes>          
      </div>
   );
}

export default App;

