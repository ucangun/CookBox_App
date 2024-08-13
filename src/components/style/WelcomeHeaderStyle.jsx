import styled from "styled-components";

const WelcomeHeader = styled.div`
  margin: 15rem auto 3rem;
  padding: 1rem 0.5rem;
  width: 80%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const WelcomeDescription = styled.p`
  font-size: 1rem;
`;

export const WelcomeSpan = styled.span`
  color: orangered;
  font-weight: 700;
`;

export default WelcomeHeader;
