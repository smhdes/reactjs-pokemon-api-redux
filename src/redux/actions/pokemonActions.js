import * as actionTypes from "./actionTypes";
import * as pokeServices from "../../services/pokeServices";

export const getPokemonList = (currentPageUrl) => {
  return async (dispatch) => {
    const response = await pokeServices.getPokeListService(currentPageUrl);

    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_POKEMON_LIST_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POKEMON_LIST_FAIL,
        payload: response.statusText,
      });
    }
  };
};

export const getPokemon = (pokemonList) => {
  return async (dispatch) => {
    let _pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        let pokemonDetail = await pokeServices.getPokemon(pokemon.url);
        return pokemonDetail.data;
      })
    );

    dispatch({
      type: actionTypes.GET_POKEMON_SUCCESS,
      payload: _pokemonData,
    });
  };
};

export const getPokemonDetails = (pokemonId) => {
  return async (dispatch) => {
    const response = await pokeServices.getPokemonDetails(pokemonId);

    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_POKEMON_DETAILS_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POKEMON_DETAILS_FAIL,
        payload: response.statusText,
      });
    }
  };
};

export const setCaughtPokemon = (pokemon) => {
  console.log("pokeee: ", pokemon);
  return (dispatch) => {
    if (pokemon) {
      dispatch({ type: actionTypes.SET_CAUGHT_POKEMON, payload: pokemon });
    } else {
      dispatch({ type: actionTypes.SET_CAUGHT_POKEMON_FAIL, payload: "" });
    }
  };
};

export const getCaughtPokemonList = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_CAUGHT_POKEMON_LIST });
  };
};

export const setReleasePokemon = (pokemonId) => {
  return (dispatch) => {
    if (pokemonId) {
      dispatch({ type: actionTypes.SET_RELEASE_POKEMON, payload: pokemonId });
    }
  };
};
