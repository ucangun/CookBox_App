import styled from "styled-components";

const DetailsContainer = styled.div`
  margin: 2rem 0;
  align-self: center;

  width: 95%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  color: #333;

  display: flex;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const IngInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const IngImage = styled.img`
  width: 22rem;
  height: 22rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const IngSpanWrapper = styled.div`
  margin: 1rem 0 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 1rem 0;
  }
`;

export const IngSpan = styled.span`
  font-size: 0.8rem;
  color: #fff;
  background-color: ${({ index }) => (index % 2 === 1 ? "red" : "green")};
  padding: 0.1rem 0.4rem;
  border-radius: 0.5rem;
`;

export const IngDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const IngBody = styled.div`
  background-color: #ebebeb;
  padding: 0.2rem 1.2rem;
  border-radius: 1rem;

  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IngNutri = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1.2rem;
  gap: 0.3rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default DetailsContainer;
