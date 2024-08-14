import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  width: 40%;
  margin: 5rem 0 0;

  align-self: center;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 80%;
    padding: 1.5rem 1rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const LoginRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export default LoginContainer;
