import {styled} from "styled-components"

const Input = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: default;
  position: absolute;
`

const TextContainer = styled.div`
  display: flex;
  position: relative;
  gap: 4px;
  flex-wrap: wrap;
  max-width: 800px;
  font-size: 20px;
  transition: ease-in-out 0.1s;
  filter: blur(4px);
  &:focus-within {
    filter: blur(0px);
  }
`

const Letter = styled.span`
  &[data-correct="true"] {
    color: white;
  }

  &[data-correct="false"] {
    color: #f03a68;
  }
  user-select: none;
  color: #545454;
`

const Word = styled.div``


export { TextContainer, Letter, Word, Input }