import React from "react";
import styled from "styled-components";
import Header from "./Header";

const ContainerDiv = styled.div`
  max-width: 1820px;
  margin-left: auto;
  margin-right: auto;
`;

const Space = styled.div<{ leftRightSpace: boolean }>`
  margin-left: ${(props) => (props.leftRightSpace ? "10px" : "auto")};
  margin-right: ${(props) => (props.leftRightSpace ? "10px" : "auto")};

  @media ${(props) => props.theme.breakPoints.laptop} {
    margin-left: auto;
    margin-right: auto;
  }
`;

type Props = { children: React.ReactChild; leftRightSpace?: boolean };

export default function Container(props: Props) {
  return (
    <ContainerDiv>
      <Header />
      <Space leftRightSpace={props.leftRightSpace ?? false}>{props.children}</Space>
    </ContainerDiv>
  );
}
