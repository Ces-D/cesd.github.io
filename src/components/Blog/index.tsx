import styled from "styled-components";
import Container from "../common/Container";
import { BlogHomePageProps } from "../../pages/blog";
import { H1 } from "../../UI/Typography";
import Card from "./Card";
import { v4 } from "uuid";

const List = styled.ul`
  list-style-type: none;
  list-style-position: outside;
  padding-inline-start: 5px;
`;

export default function BlogHomePage(props: BlogHomePageProps) {
  return (
    <Container leftRightSpace={true}>
      <>
        <H1>Blog Posts</H1>
        <List>
          {props.posts.map((post) => (
            <Card key={v4()} {...post} />
          ))}
        </List>
      </>
    </Container>
  );
}
