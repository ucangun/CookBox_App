import styled from "styled-components";
import HomepageImg from "../../assets/images/Homepage.jpg";

const HomeContainer = styled.div`
  height: 100vh;
  padding: 0.4rem 2rem 0 1.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${HomepageImg}) no-repeat center center/cover;
`;

export default HomeContainer;
