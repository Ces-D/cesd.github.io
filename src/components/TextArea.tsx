import styled from "styled-components"

const CustomArea = styled.textarea`
    background-color: inherit;
    width: calc(100vw - 1em);
    outline: none;
    border: none;
    resize: none;

    color: ${props => props.theme.palette.major.beta}
`

const TextArea = () => {
  const resizeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const height = `${e.currentTarget.scrollHeight}px`
    e.currentTarget.style.height = height
  }

  return <CustomArea autoFocus onInput={resizeTextArea} />
}

export default TextArea

// TODO: should forward ref
