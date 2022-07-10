import type { DefaultTheme } from "styled-components"
import styled from "styled-components"

const Typo = styled.p<{ color: keyof DefaultTheme["palette"] }>`
    margin-block: 0.15em;
    color: ${props => props.theme.palette[props.color]};
`

type Props = {
    children: string,
    color?: keyof DefaultTheme["palette"]
}
const Typography = ({ children, color="silver" }: Props) => {
    return <Typo color={color}>{children}</Typo>
}

export default Typography

