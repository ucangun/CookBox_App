import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Navlinks = styled(Nav)`
  gap: 2rem;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export default Nav;
