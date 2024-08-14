import Button from "./Button";
import LoginContainer, {
  LoginForm,
  LoginInput,
  LoginRow,
} from "./style/LoginBoxStyle";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const {
    user,
    setUser,
    password,
    setPassword,
    handleLogin,
    handleLogout,
    isAuthenticated,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <LoginForm>
        <LoginRow>
          <label htmlFor="email">Email address</label>
          <LoginInput
            type="email"
            id="email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="user@gmail.com"
          />
        </LoginRow>

        <LoginRow>
          <label htmlFor="password">Password</label>
          <LoginInput
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
          />
        </LoginRow>

        <div>
          <Button
            secondary="true"
            onClick={(e) =>
              isAuthenticated
                ? handleLogout(e, navigate)
                : handleLogin(e, navigate)
            }
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginBox;
