import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { H1, H2 } from "../UI/Typography";

const HeaderContainer = styled.nav`
  width: 100%;
  height: 5em;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: end;
  width: 15em;
`;

const A = styled.a<{ activePath?: string }>`
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

export default function Header() {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Link href={"/"} passHref>
        <A href={"/"} activePath={router.pathname}>
          <H1>Cesar Diaz</H1>
        </A>
      </Link>
      <NavItems>
        <Link href={"/projects"} passHref>
          <A activePath={router.pathname}>
            <H2>Projects</H2>
          </A>
        </Link>
        <Link href={"/blog"} passHref>
          <A activePath={router.pathname}>
            <H2>Blog</H2>
          </A>
        </Link>
      </NavItems>
    </HeaderContainer>
  );
}

// TODO: small styling tweaks and get the actual recently updated repos not these
// TODO: find a way to update the images for the repos
