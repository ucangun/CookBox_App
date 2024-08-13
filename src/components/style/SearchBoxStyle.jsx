import styled from "styled-components";

const SearchContainer = styled.div`
  margin: 5rem 0 0 0;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const SearchInput = styled.input`
  padding: 0.4rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.3rem;

  &:focus {
    outline: none;
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
`;

export default SearchContainer;
