import styled from "styled-components"

const InputContainer = styled.div`
    display : flex;

    ::before {
        content: '>';
        color: ${props => props.theme.palette.minor.b};
        margin-right: 0.75em;
    }
`
type Props = {
    children: React.ReactNode
}
const ConsoleIn = ({ children }: Props) => {

    return (
        <InputContainer>
            {children}
        </InputContainer>
    )
}

export default ConsoleIn