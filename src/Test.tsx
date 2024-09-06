import { Container } from "./Test.styled";
import { TypingText } from "@/components/Text/TypingText";
import { Menu } from "@/components/Menu/Menu";

const Test = () => {
  return (
    <Container>
      <TypingText />
      <Menu />
    </Container>
  );
};

export { Test };
