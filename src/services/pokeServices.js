import axios from "axios";
import { API_BASE_URL } from "../constant/constants";

export const getPokeListService = (currentPageUrl) => {
  return axios.get(currentPageUrl);
};

export const getPokeImageUrl = (imgUrl) => {
  return axios.get(imgUrl);
};

export const getPokemon = (url) => {
  return axios.get(url);
};

export const getPokemonDetails = (pokemonId) => {
  return axios.get(API_BASE_URL + pokemonId);
};
