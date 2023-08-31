import { useState } from "react";
import validation from "./validation";

export default function Form ({login}) {
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({...userData, [property] : value});    
        validation({...userData, [property] : value}, errors, setErrors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="email" type="text" onChange={handleChange}></input>
                <h6>{errors.email}</h6>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input name="password" type="text" onChange={handleChange}></input>
                <h6>{errors.password}</h6>
            </div>
            <button>Submit</button>
        </form>
    )    
}