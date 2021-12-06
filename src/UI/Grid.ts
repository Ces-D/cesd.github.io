import styled from "styled-components";

// https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
type GridWrapperProps = {
  colGap?: string;
  rowGap?: string;
  templateColumns: string;
};

export const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  grid-column-gap: ${(props) => props.colGap ?? 0};
  grid-row-gap: ${(props) => props.rowGap ?? 0};
  grid-template-columns: ${(props) => props.templateColumns ?? "1fr"};
`;
