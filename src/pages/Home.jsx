import Navbar from "../components/Navbar";
import Container from "../components/style/ContainerStyle";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Container>
      <Navbar />
      <Header />
      <Button
        onClick={() =>
          isAuthenticated ? navigate("/search") : navigate("/login")
        }
      >
        Get Started !
      </Button>
    </Container>
  );
};

export default Home;
