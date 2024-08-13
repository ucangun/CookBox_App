import styled from "styled-components";

const MainButton = styled.button`
  align-self: center;
  display: inline-block;
  padding: ${({ secondary }) => (secondary ? "0.5rem 1rem" : "0.8rem 1.4rem")};
  background-color: ${({ secondary }) => (secondary ? "orangered" : "#fff")};
  color: ${({ secondary }) => (secondary ? "#fff" : "orangered")};
  border: none;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default MainButton;
