import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 24px;
  line-height: 30px;

  @media ${(props) => props.theme.breakPoints.tablet} {
    font-size: 28px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const H2 = styled.h2`
  font-size: 19px;
  line-height: 28px;

  @media ${(props) => props.theme.breakPoints.tablet} {
    font-size: 23px;
    line-height: 30px;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    font-size: 27px;
    line-height: 32px;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  line-height: 20px;

  @media ${(props) => props.theme.breakPoints.tablet} {
    font-size: 22px;
    line-height: 22px;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const P1 = styled.p`
  font-size: 16px;
  line-height: 27px;

  @media ${(props) => props.theme.breakPoints.tablet} {
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const P2 = styled.p`
  font-size: 14px;
  line-height: 18px;

  @media ${(props) => props.theme.breakPoints.tablet} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    font-size: 18px;
    line-height: 23px;
  }
`;

export const P3 = styled.p`
  font-size: 12px;
  line-height: 18px;

  @media ${(props) => props.theme.breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    font-size: 16px;
    line-height: 23px;
  }
`;
