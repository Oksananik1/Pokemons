import LOAD_POKEMON_LIST from "../actions/loadPokemonList";

function loadPokemonList(list) {
  let isLoaded = false;
  let errorQuery = null;

  if (list.nextQuery !== null) {
    fetch(
      list.nextQuery === ""
        ? "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
        : list.nextQuery
    )
      .then((res) => res.json())
      .then(
        (result) => {
          list.pokemonList =list.pokemonList.concat(result.results);
          isLoaded = true;
          list.nextQuery = result.next;
        },
        (error) => {
          errorQuery = error;
          isLoaded = true;
        }
      );
  }

  // if (error) {
  //   return <div>Ошибка: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Загрузка...</div>;
  // } else {

  return {
    type: LOAD_POKEMON_LIST,
    list: {
      pokemonList: list.pokemonList,
      nextQuery: list.nextQuery,
      isLoaded: isLoaded,
      errorQuery: errorQuery,
    },
  };
}

export default loadPokemonList;
