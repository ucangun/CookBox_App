import styled from "styled-components";

const MainButton = styled.button`
  align-self: center;
  display: inline-block;
  padding: ${({ secondary }) => (secondary ? "0.4rem .8rem" : "0.8rem 1.4rem")};
  background-color: ${({ secondary }) => (secondary ? "orangered" : "#fff")};
  color: ${({ secondary }) => (secondary ? "#fff" : "orangered")};
  border: none;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#fff" : "#ff4500")};
    color: ${({ secondary }) => (secondary ? "#ff4500" : "#fff")};
  }
`;

export const DetailButton = styled.a`
  margin-top: 2rem;
  font-size: 1rem;
  margin-top: auto;
  color: orangered;

  text-decoration: underline;
  background-color: #fff;
  padding: 0.4rem 0.8rem;
  border: none;
  cursor: pointer;
`;

export default MainButton;
