import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Input, Letter, TextContainer, Word } from "./TypingText.styled";
import { useAppSelector } from "@/hooks/useAppSelector";
import { increment } from "@/store/slices/textSlice";

const TypingText = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.textSlice.text);
  const { charIndex, wordIndex } = useAppSelector((state) => ({
    charIndex: state.textSlice.currentCharIndex,
    wordIndex: state.textSlice.currentWordIndex,
  }));

  const handleTyping = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key.charCodeAt(0) != 32 ||
      event.key.charCodeAt(0) < 97 ||
      event.key.charCodeAt(0) > 122
    )
      return;
    dispatch(increment("pressCount"));

    console.log(
      wordIndex,
      charIndex,
      text[wordIndex].length,
      text[wordIndex][charIndex]
    );
    const currentLetter = document.getElementById(`${wordIndex}-${charIndex}`);
    if (currentLetter?.textContent === event.key) {
      dispatch(increment("char"));
      currentLetter?.setAttribute("data-correct", "true");
    } else {
      currentLetter?.setAttribute("data-correct", "false");
    }

    if (text[wordIndex].length <= charIndex) {
      dispatch(increment("word"));
    }
  };

  return (
    <TextContainer>
      <Input type="text" onKeyDown={handleTyping} />
      {text.map((word, curWordIndex) => (
        <Word key={curWordIndex}>
          {word.split("").map((letter, curCharIndex) => (
            <Letter id={`${curWordIndex}-${curCharIndex}`} key={curCharIndex}>
              {letter}
            </Letter>
          ))}
        </Word>
      ))}
    </TextContainer>
  );
};

export { TypingText };
