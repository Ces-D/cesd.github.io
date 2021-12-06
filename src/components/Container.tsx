import React from "react";
import styled from "styled-components";
import Header from "./Header";

const ContainerDiv = styled.div`
  max-width: 84rem;
  margin-left: auto;
  margin-right: auto;
`;

type Props = { children: React.ReactChild };

export default function Container(props: Props) {
  return (
    <ContainerDiv>
      <Header />
      {props.children}
    </ContainerDiv>
  );
}
