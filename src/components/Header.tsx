import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { H1, H2, A } from "../UI/Typography";

const HeaderContainer = styled.nav`
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: end;
  width: 10em;
`;

export default function Header() {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Link href={"/"} passHref>
        <A activePath={router.pathname}>
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
