import styled from "styled-components";

const SearchContainer = styled.div`
  margin: 5rem 0 0 0;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 3rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.4rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.3rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 85%;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    font-size: 0.95rem;
  }
`;

export const SearchSelect = styled.select`
  padding: 0.4rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.3rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 85%;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    font-size: 0.9rem;
  }
`;

export default SearchContainer;
