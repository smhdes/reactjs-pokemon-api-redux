/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Button = styled.button`
  margin: 0 10px;
  font-size: 10px;
  text-align: center;
  padding: 8px 15px;
  outline: none;
  border: none;
  border-radius: 15px;
  &.text {
    color: rgb(80, 24, 126);
    font-weight: 900;
  }
`;
const button = ({ text, onClick }) => {
  const { t } = useTranslation();

  return (
    <Button onClick={onClick}>
      {" "}
      <span className="text">{t(text)}</span>
    </Button>
  );
};

export default button;
