import Link, { LinkProps } from "next/link";
import { ReactChild } from "react";
import styled from "styled-components";

const A = styled.a`
  padding: 0 1rem 0 1rem;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};

  &:hover {
    color: ${(props) => props.theme.colors.primaryBrown};
  }
`;

type Props = LinkProps & { children: ReactChild };

export default function AnchorLink(props: Props) {
  return (
    <Link {...props}>
      <A>{props.children}</A>
    </Link>
  );
}
