import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 50px;
  background-color: #323232;
  border-radius: 10px;
`;

const StartButton = styled.button`
  width: fit;
  height: fit;
  background-color: #404040;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  color: white;
  text-transform: uppercase;
  &:hover {
    background-color: #606060;
  }
  &:disabled {
    cursor: disabled;
  }
`;

export { Container, StartButton };
