import styled from "styled-components";

const Logo = styled.img`
  width: 10rem;
  height: 8rem;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 8rem;
    height: 6rem;
  }

  @media (max-width: 480px) {
    width: 6rem;
    height: 4.8rem;
  }
`;

export default Logo;
