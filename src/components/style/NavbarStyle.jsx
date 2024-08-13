import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navlink = styled(Nav)`
  gap: 2rem;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
`;

export default Nav;
