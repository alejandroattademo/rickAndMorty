import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharactersFav: [],
    aux: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state,
                myFavorites: [...state.allCharactersFav, action.payload],
                allCharactersFav: [...state.allCharactersFav, action.payload]
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload), 
            };

        case FILTER:            
            return{
                ...state,
                myFavorites: 
                action.payload === 'AllCharacters'
                ? [...state.allCharactersFav]
                : state.allCharactersFav.filter(
                    char=>char.gender === action.payload )
            };

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav];
            return {
                ...state,
                myFavorites: 
                    action.payload === 'A'
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id) 
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id) 
            };
            
        default:
            return state;
    }
};

export default rootReducer;