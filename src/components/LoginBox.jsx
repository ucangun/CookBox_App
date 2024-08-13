import Button from "./Button";
import LoginContainer, {
  LoginForm,
  LoginInput,
  LoginRow,
} from "./style/LoginBoxStyle";

const LoginBox = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <LoginRow>
          <label htmlFor="email">Email address</label>
          <LoginInput type="email" id="email" />
        </LoginRow>

        <LoginRow>
          <label htmlFor="password">Password</label>
          <LoginInput type="password" id="password" />
        </LoginRow>

        <div>
          <Button secondary>Login</Button>
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginBox;
