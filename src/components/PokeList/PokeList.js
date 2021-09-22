/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { COLORS } from "../../constant/constants";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import * as pokemonActions from "../../redux/actions/pokemonActions";
import styled from "styled-components";
import "./styles.css";
const Container = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  ${(props) =>
    COLORS[props.color] &&
    ` background:${COLORS[props.color]};
      color: white;
      font-size:18px;
      padding:5px`}
`;

const PlusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0;
  font-size: 30px;
  color: green;
`;

const pokeList = ({ pokemon }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const catchPokeHandler = (poke) => {
    dispatch(pokemonActions.setCaughtPokemon(poke));
  };
  return (
    <div className="pokemon-container">
      {pokemon && (
        <div className="pokemon">
          <Link to={`/details/${pokemon.id}`}>
            <div className="img-container">
              <img
                src={pokemon?.sprites.front_default}
                alt={pokemon?.name}
                loading="lazy"
              />
            </div>
          </Link>
          <div className="info">
            <span className="number">{pokemon?.order}</span>
            <h3 className="name">{pokemon?.name}</h3>
            <small className="type">
              {t("type")}:{" "}
              {pokemon.types &&
                pokemon.types.map((_type) => (
                  <Container color={_type.type.name} key={uuidv4()}>
                    <span className="type-text" key={uuidv4()}>
                      {t(_type.type.name)}
                    </span>
                  </Container>
                ))}
            </small>
            <PlusContainer>
              <i
                className="fas fa-plus-circle"
                onClick={() => catchPokeHandler(pokemon)}
              ></i>
            </PlusContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default pokeList;
