import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;

  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.2rem;
  }
`;

export const Navlinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Nav;
