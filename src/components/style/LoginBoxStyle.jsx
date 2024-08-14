import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  border-radius: 0.3rem;
  padding: 2rem 1rem;
  width: 40%;
  margin: 5rem 0 0;

  align-self: center;
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
