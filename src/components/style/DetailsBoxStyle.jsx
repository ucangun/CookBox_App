import styled from "styled-components";

const DetailsContainer = styled.div`
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
`;

export const IngInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;

export const IngImage = styled.img`
  width: 22rem;
  height: 22rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5);
`;

export const IngSpanWrapper = styled.div`
  margin: 1rem 0 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
`;

export const IngNutri = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1.2rem;
  gap: 0.3rem;
`;

export default DetailsContainer;
