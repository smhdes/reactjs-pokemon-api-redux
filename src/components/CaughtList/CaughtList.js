/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { useHistory } from "react-router-dom";
import * as pokemonActions from "../../redux/actions/pokemonActions";
import { v4 as uuidv4 } from "uuid";

const caughtList = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const navigateTo = () => history.push("/");
  const dispatch = useDispatch();
  const caughtPokemons = useSelector(
    (state) => state.pokemonsReducer.caughtPokemonList
  );
  const isCaught = useSelector((state) => state.pokemonsReducer.isCaught);

  React.useEffect(() => {
    if (isCaught) {
      dispatch(pokemonActions.getCaughtPokemonList());
    }
  }, [caughtPokemons.length]);

  const releasePokemonHandle = (pokemonId) => {
    if (pokemonId) {
      dispatch(pokemonActions.setReleasePokemon(pokemonId));
    }
  };

  return (
    <React.Fragment>
      <h2> {t("caught_list")} </h2>
      <div className="container">
        {caughtPokemons.length > 0
          ? caughtPokemons.map((_caughtPoke) => {
              return (
                <div key={uuidv4()} className="card-grid-space">
                  <div className="card">
                    <div>
                      <h1>{_caughtPoke.name}</h1>
                      <img
                        className="pokemon_img"
                        src={
                          _caughtPoke?.sprites?.other?.dream_world
                            ?.front_default
                        }
                      />
                      <div className="release">
                        <i
                          className="fas fa-calendar-times"
                          onClick={() => releasePokemonHandle(_caughtPoke.id)}
                        >
                          {t("release")}
                        </i>
                      </div>
                      <div className="tags">
                        {_caughtPoke?.abilities.map((_ability) => (
                          <div key={uuidv4()} className="tag">
                            {_ability.ability.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : navigateTo()}
      </div>
    </React.Fragment>
  );
};

export default caughtList;
