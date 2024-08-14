import styled from "styled-components";

const WelcomeHeader = styled.div`
  margin: 12rem auto 3rem;
  padding: 1rem 0.5rem;
  width: 80%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    margin: 2rem auto 2rem;
    width: 90%;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    margin: 2rem auto 1.5rem;
    width: 95%;
    gap: 0.8rem;
  }
`;

export const WelcomeDescription = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.3;
  }
`;

export const WelcomeSpan = styled.span`
  color: orangered;
  font-weight: 700;
`;

export default WelcomeHeader;
