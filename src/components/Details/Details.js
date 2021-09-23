/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as pokemonActions from "../../redux/actions/pokemonActions";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { COLORS } from "../../constant/constants";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 5px;
  border-radius: 20px;
`;

const TypesContainer = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
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

const BgContainer = styled.div`
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  position: absolute;
  top: 0;
  height: 100%;
  right: 0;
  background-size: cover;
  width: 80%;
  background-position: 50% 50%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Details() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const pokemonDetails = useSelector((state) => state.pokemonsReducer.pokemon);
  const isCaught = useSelector((state) => state.pokemonsReducer.isCaught);
  const loading = useSelector((state) => state.pokemonsReducer.loading);
  const params = useParams();

  React.useEffect(() => {
    dispatch(pokemonActions.getPokemonDetails(params.id));
  }, [params.id]);

  React.useEffect(() => {
    if (!loading) {
      dispatch(pokemonActions.getPokemonDetails(params.id));
    }
  }, [loading]);

  console.log("isCaught: ", isCaught);
  return (
    <React.Fragment>
      <Header>
        <h3>{t("details")}</h3>
      </Header>
      {pokemonDetails && (
        <div className="pokemon_card">
          <div className="info_section">
            <div className="pokemon_header">
              <img
                className="pokemon_img"
                src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
              />
              <h1>{pokemonDetails.name}</h1>
              <h4>
                {t("experience")}: {pokemonDetails?.base_experience}
              </h4>
              <Container key={uuidv4()}>
                {pokemonDetails?.stats &&
                  pokemonDetails.stats.map((_stat) => (
                    <span key={uuidv4()} className="stats">
                      {t(_stat.stat.name)} {_stat.base_stat}
                    </span>
                  ))}
              </Container>
              {pokemonDetails.types &&
                pokemonDetails.types.map((_type) => (
                  <TypesContainer color={_type.type.name} key={uuidv4()}>
                    <span className="type-text">{t(_type.type.name)}</span>
                  </TypesContainer>
                ))}
            </div>
          </div>
          <BgContainer
            background={
              pokemonDetails?.sprites?.other?.dream_world?.front_default
            }
          ></BgContainer>
        </div>
      )}
    </React.Fragment>
  );
}
