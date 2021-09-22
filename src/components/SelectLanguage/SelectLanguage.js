/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useLanguageChange } from "../../contextStore/LanguageContext";
const languageMap = {
  tr: { label: "Türkçe", dir: "ltr", active: true },
  en: { label: "English", dir: "ltr", active: false },
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    color: #129cf3;
    background-color: white;
    border: 3px solid #507efa;
    border-radius: 50%;
    width: 70px;
    height: 40px;
    margin: 5px;
  }
`;

const selectLanguage = () => {
  const changeLanguage = useLanguageChange();

  return (
    <Container>
      {Object.keys(languageMap).map((_language) => (
        <button
          key={uuidv4()}
          onClick={() => {
            changeLanguage(_language);
          }}
        >
          {languageMap[_language].label}
        </button>
      ))}
    </Container>
  );
};

export default selectLanguage;
