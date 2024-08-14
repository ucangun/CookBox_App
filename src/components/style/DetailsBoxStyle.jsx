import styled from "styled-components";

const DetailsContainer = styled.div`
  align-self: center;

  width: 95%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

export const IngContainer = styled.div`
  display: flex;
  gap: 5rem;
`;

export const IngImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
`;

export const IngSpanWrapper = styled.div`
  margin: 1rem 0 0 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const IngSpan = styled.span`
  font-size: 0.8rem;
  color: #fff;
  background-color: ${({ index }) => (index % 2 === 1 ? "red" : "green")};
  padding: 0.1rem 0.4rem;
  border-radius: 0.5rem;
`;

export const IngBody = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: #333;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default DetailsContainer;
