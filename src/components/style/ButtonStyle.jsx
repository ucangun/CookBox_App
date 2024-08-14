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

  @media (max-width: 768px) {
    padding: ${({ secondary }) =>
      secondary ? "0.4rem 0.8rem" : "0.6rem 1.2rem"};
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: ${({ secondary }) => (secondary ? "0.3rem .8rem" : "0.4rem 1rem")};
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
  }
`;

export default MainButton;
