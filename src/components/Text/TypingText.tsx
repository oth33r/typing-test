import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Input, Letter, TextContainer, Word } from "./TypingText.styled"
import { useAppSelector } from "@/hooks/useAppSelector";


const TypingText = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector(state => state.textSlice.text)
  const {charIndex, wordIndex} = useAppSelector(state => ({
    charIndex: state.textSlice.currentCharIndex,
    wordIndex: state.textSlice.currentWordIndex,
  }))
  

  const handleTyping = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key.charCodeAt(0) >= 97 && event.key.charCodeAt(0) <= 122) {
      console.log(event.key);
    }
  }

  return (
    <TextContainer>
      <Input type="text" onKeyDown={handleTyping}/>
      {text.map((word, curWordIndex) => (
        <Word key={curWordIndex}>
          {word.split('').map((letter, curCharIndex) => (
            <Letter key={curCharIndex}>{letter}</Letter>
          ))}
        </Word>
      ))}
    </TextContainer>
  )
}

export { TypingText }