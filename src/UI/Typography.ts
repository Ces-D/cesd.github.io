import styled from "styled-components";
import { HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy } from "react";

export const H1 = styled.h1`
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */
`;

export const H2 = styled.h2`
  font-size: 19px;
  line-height: 28px;
  /* identical to box height, or 147% */
`;

export const H3 = styled.h3`
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */
`;

export const P1 = styled.p`
  font-size: 16px;
  line-height: 32px;
`;

export const P2 = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const P3 = styled.p`
  font-size: 12px;
  line-height: 14px;
`;

export const A = styled.a.attrs(
  (props: { rel: HTMLAttributeReferrerPolicy; target: HTMLAttributeAnchorTarget }) => ({
    rel: props.rel ?? "nofollow",
    target: props.target ?? "_blank",
  })
)<{ activePath?: string }>`
  padding: 0 1rem 0 1rem;
  text-decoration: none;
  color: ${(props) => {
    return props.activePath === props.href
      ? props.theme.colors.primaryBlue
      : props.theme.colors.black;
  }};

  &:hover {
    color: ${(props) => props.theme.colors.primaryBrown};
  }
`;
