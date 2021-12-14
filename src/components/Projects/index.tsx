import Container from "../common/Container";
import styled from "styled-components";
import { ProjectsPageProps } from "../../pages/projects";
import { H1 } from "../../UI/Typography";
import Card from "./Card";
import { v4 } from "uuid";

const List = styled.ul`
  list-style-type: none;
  list-style-position: outside;
  padding-inline-start: 5px;
`;

export default function ProjectsPage(props: ProjectsPageProps) {
  return (
    <Container leftRightSpace={true}>
      <>
        <H1>Projects</H1>
        <List>
          {props.projects.map((project) => (
            <Card key={v4()} {...project} />
          ))}
        </List>
      </>
    </Container>
  );
}
