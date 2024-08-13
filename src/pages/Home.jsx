import Navbar from "../components/Navbar";
import HomeContainer from "../components/style/ContainerStyle";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Navbar />
      <Header />
      <Button onClick={() => navigate("/login")}>Get Started !</Button>
    </HomeContainer>
  );
};

export default Home;
