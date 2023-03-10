import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm>
          <StyledInput type="text" placeholder="username" />
          <StyledInput type="password" placeholder="Password" />
          <StyledButton type="submit" />
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
