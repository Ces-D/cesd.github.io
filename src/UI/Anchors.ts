import styled from "styled-components";

export const A = styled.a.attrs((props) => ({
  rel: props.rel ?? "noreferrer",
  target: props.target ?? "_self",
}))`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};

  &:hover {
    color: ${(props) => props.theme.colors.primaryBrown};
  }
`;
