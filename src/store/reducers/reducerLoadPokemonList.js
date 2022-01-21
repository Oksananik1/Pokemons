import loadPokemonList from '../actionCreators/loadPokemonList';
import LOAD_POKEMON_LIST from '../actions/loadPokemonList';
import initialState from '../initialState';

export default function pokemonList(state = initialState.list, action) {
    switch(action.type) {
        case LOAD_POKEMON_LIST: return loadPokemonList(state.list);
        
        default: return state;
    }
}