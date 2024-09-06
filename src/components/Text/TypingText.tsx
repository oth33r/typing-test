import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Input, Letter, TextContainer, Word } from "./TypingText.styled";
import { useAppSelector } from "@/hooks/useAppSelector";
import { increment } from "@/store/slices/textSlice";
import { shallowEqual } from "react-redux";

const TypingText = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.textSlice.text);
  const { charIndex, wordIndex } = useAppSelector(
    (state) => ({
      charIndex: state.textSlice.currentCharIndex,
      wordIndex: state.textSlice.currentWordIndex,
    }),
    shallowEqual
  );

  const isFinished = text.length == wordIndex;

  const handleTyping = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key.charCodeAt(0) < 97 || event.key.charCodeAt(0) > 122) return;
    dispatch(increment("pressCount"));

    const currentLetter = document.getElementById(`${wordIndex}-${charIndex}`);
    console.log(currentLetter?.textContent);
    if (currentLetter?.textContent === event.key) {
      dispatch(increment("char"));
      currentLetter?.setAttribute("data-correct", "true");
    } else {
      currentLetter?.setAttribute("data-correct", "false");
    }

    if (
      text[wordIndex].length - 1 <= charIndex &&
      currentLetter?.getAttribute("data-correct") != "false"
    ) {
      dispatch(increment("word"));
    }
  };

  return (
    <>
      {isFinished ? (
        "End of the test"
      ) : (
        <TextContainer>
          <Input type="text" onKeyDown={handleTyping} />
          {text.map((word, curWordIndex) => (
            <Word key={curWordIndex}>
              {word.split("").map((letter, curCharIndex) => (
                <Letter
                  id={`${curWordIndex}-${curCharIndex}`}
                  key={`${curWordIndex}-${curCharIndex}`}
                >
                  {letter}
                </Letter>
              ))}
            </Word>
          ))}
        </TextContainer>
      )}
    </>
  );
};

export { TypingText };
