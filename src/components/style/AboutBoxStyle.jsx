import styled from "styled-components";

const AboutContainer = styled.div`
  align-self: center;
  margin: 4rem 0;
  width: 90%;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;

  display: grid;
  grid-template-columns: 35% 60%;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ChefImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 30rem;
  }
`;

export const AboutDescription = styled.div`
  padding: 4rem 2.5rem;
  color: #333;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const AboutDescriptionTitle = styled.h3`
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const AboutDescriptionBody = styled.p`
  padding: 0.5rem 0.5rem 0rem 0rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0;
    text-align: justify;
  }
`;

export default AboutContainer;
