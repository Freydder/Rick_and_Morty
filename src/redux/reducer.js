import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  favorites: [],
  allCharacter: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      const addFavorites = [...state.allCharacter, payload];
      return {
        ...state,
        favorites: [...addFavorites],
        allCharacter: [...addFavorites],
      };
    case REMOVE_FAV:
      return {
        ...state,
        allCharacter: state.allCharacter.filter((e) => e.id !== Number(payload)),
      };
    case FILTER:
      return {
        ...state,
        favorites: state.allCharacter.filter((e) => e.gender === payload)
      }
    case ORDER:
      let orderFavorites;
      if(payload==="A"){
        orderFavorites = state.favorites.sort((a, b) => a.id > b.id ? 1 : - 1)
      } else {
        orderFavorites = state.favorites.sort((a, b) => a.id < b.id ? 1 : - 1)        
      }
      return {
        ...state,
        favorites: [...orderFavorites],
      }  
    default:
      return {
        ...state,
      };
  }
};

export default reducer;