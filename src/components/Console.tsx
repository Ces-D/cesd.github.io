import styled from "styled-components"
import type { PropsWithChildren } from "react"

const Row = styled.div<{ variant: "in" | "out" }>`
    display : flex;
    height:"auto";
    
    ::before {
        content: '>';
        color: ${props => props.variant === "in" ? props.theme.palette.light_french : "transparent"};
        margin-right: 0.75em;
    }
`


type Props = {
  variant: "in" | "out"
}
const Console = ({ variant, children }: PropsWithChildren<Props>) => {
  return <Row variant={variant}>
    {children}
  </Row>
}

export default Console
