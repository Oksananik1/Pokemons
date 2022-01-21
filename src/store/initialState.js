
import loadPokemonList from "./actionCreators/loadPokemonList";

const initialState = {
	list:loadPokemonList({pokemonList:[],
        nextQuery:"",
        isLoaded:false,
        errorQuery:null
    })
};

export default initialState;