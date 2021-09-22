import React from "react";
import styled from "styled-components";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
const Container = styled.div`
  position: fixed;
`;

export default function Header() {
  return (
    <Container>
      <SelectLanguage />
    </Container>
  );
}
