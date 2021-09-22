/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokeList/PokeList";
import Pagination from "./components/Pagination/Pagination";
import SelectLanguage from "./components/SelectLanguage/SelectLanguage";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as pokeActions from "./redux/actions/pokemonActions";
import { Link } from "react-router-dom";
import LanguageProvider from "./contextStore/LanguageContext";
import Loader from "./components/Loader/Loader";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { API_BASE_URL } from "./constant/constants";

function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [currentPageUrl, setCurrentPageUrl] = useState(API_BASE_URL);

  const loading = useSelector((state) => state.pokemonsReducer.loading);
  const pokeList = useSelector((state) => state.pokemonsReducer.pokeList);
  const pokemonAll = useSelector((state) => state.pokemonsReducer.pokemonAll);
  const nextPage = useSelector((state) => state.pokemonsReducer.nextPageUrl);
  const prevPage = useSelector((state) => state.pokemonsReducer.prevPageUrl);
  const isCaught = useSelector((state) => state.pokemonsReducer.isCaught);

  const [show, setShow] = React.useState(false);

  useEffect(async () => {
    // axios.interceptors.request.use(
    //   (request) => {
    //     setShow((prevState) => !prevState);
    //     return request;
    //   },
    //   function (error) {
    //     return Promise.reject(error);
    //   }
    // );

    // axios.interceptors.response.use(
    //   function (response) {
    //      setShow((prevState) => !prevState);

    //     return response;
    //   },
    //   function (error) {
    //     return Promise.reject(error);
    //   }
    // );

    await dispatch(pokeActions.getPokemonList(currentPageUrl));
    await loadPokemon(pokeList);
    //ComponentUnMount and clear
    // return () =>
    //   setShow((prevState) => {
    //     return { show: !prevState };
    //   });
  }, [currentPageUrl, nextPage, prevPage]); // eslint-disable-line react-hooks/exhaustive-deps

  const gotoNextPage = async () => {
    await setCurrentPageUrl(nextPage);
    await dispatch(pokeActions.getPokemonList(currentPageUrl));
    await loadPokemon(pokeList);
  };

  const gotoPrevPage = async () => {
    await setCurrentPageUrl(prevPage);
    await dispatch(pokeActions.getPokemonList(currentPageUrl));
    await loadPokemon(pokeList);
  };

  const loadPokemon = React.useCallback(
    async (data) => {
      await dispatch(pokeActions.getPokemon(data));
    },
    [loading]
  );

  if (loading) return <Loader />;

  return (
    <LanguageProvider>
      <Header />
      {isCaught && (
        <Link style={{ marginLeft: "50%" }} to="/caughts">
          {t("see_pokedex")}
        </Link>
      )}
      <Pagination
        gotoNextPage={nextPage ? gotoNextPage : null}
        gotoPrevPage={prevPage ? gotoPrevPage : null}
      />
      {pokemonAll && (
        <div className="container">
          {pokemonAll.map((_poke) => (
            <PokemonList key={uuidv4()} pokemon={_poke} />
          ))}
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
