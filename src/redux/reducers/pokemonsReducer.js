/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  pokeList: [],
  loading: true,
  isError: false,
  nextPageUrl: null,
  prevPageUrl: null,
  pokemonAll: [],
  pokemon: {},
  caughtPokemonList: [],
  isCaught: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        pokeList: action.payload.results,
        loading: false,
        nextPageUrl: action.payload.next,
        prevPageUrl: action.payload.previous,
      };
    }

    case actionTypes.GET_POKEMON_LIST_FAIL: {
      return {
        ...state,
        isError: true,
        loading: true,
      };
    }

    case actionTypes.GET_POKEMON_SUCCESS: {
      return {
        ...state,
        pokemonAll: action.payload,
        loading: false,
      };
    }

    case actionTypes.GET_POKEMON_FAIL: {
      return {
        isError: true,
        isCaught: false,
      };
    }

    case actionTypes.GET_POKEMON_DETAILS_SUCCESS: {
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    }

    case actionTypes.SET_CAUGHT_POKEMON: {
      return {
        ...state,
        isCaught: true,
        caughtPokemonList:
          state.caughtPokemonList.indexOf(action.payload) === -1
            ? [...state.caughtPokemonList, action.payload]
            : [...state.caughtPokemonList],
      };
    }

    case actionTypes.GET_CAUGHT_POKEMON_LIST: {
      return {
        ...state,
        isCaught: true,
      };
    }

    case actionTypes.SET_CAUGHT_POKEMON_FAIL: {
      return {
        ...state,
        isCaught: false,
      };
    }

    case actionTypes.SET_RELEASE_POKEMON: {
      let getPokemonIndex = state.caughtPokemonList.findIndex(
        (poke) => poke.id === action.payload
      );

      // get a copy of array for mutable
      let updatedPokeList = state.caughtPokemonList.slice();
      updatedPokeList.splice(getPokemonIndex, 1);
      return {
        ...state,
        caughtPokemonList: updatedPokeList,
        isCaught: updatedPokeList.length > 0 ? true : false,
      };
    }

    default:
      return { ...state };
  }
};
