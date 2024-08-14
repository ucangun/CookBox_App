import styled from "styled-components";

const SearchResultContainer = styled.div`
  align-self: center;
  margin: 3rem 0 0 0;
  width: 90%;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const SearchCard = styled.div`
  width: 18rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CardTitle = styled.h4`
  height: 3rem;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 1rem;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export default SearchResultContainer;
