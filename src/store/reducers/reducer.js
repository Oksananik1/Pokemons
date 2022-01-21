import { combineReducers } from 'redux';
import pokemonList from './reducerLoadPokemonList';
// import value_2 from './reducer_2'; 

const reducers = combineReducers({
    pokemonList,
    // value_2
});

export default reducers;