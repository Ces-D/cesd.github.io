import styled from "styled-components"

const WriterContainer = styled.div`
    display : flex;
    
    ::before {
        content: '>';
        color: transparent;
        margin-right: 0.75em;
    }
`

type Props = {
    children: React.ReactNode
}

const TypeWriter = ({ children }: Props) => {
    return (
        <WriterContainer>
            {children}
        </WriterContainer>
    )
}

export default TypeWriter