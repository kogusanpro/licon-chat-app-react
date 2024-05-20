import { styled } from "styled-components";

export const Header = () => {
  return <SHeader>Licon Chat Message App</SHeader>;
};

const SHeader = styled.header`
  background-color: orange;
  font-weight: bold;
  font-size: 25px;
  color: white;
  padding: 20px 10px;
`;
