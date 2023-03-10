import React from "react";

const Login = () => {
  return (
    <LoginContainertainer>
      <Header>Login Here</Header>
      <StyledForm>
        <StyledInput type="text" placeholder="username" />
        <StyledInput type="password" placeholder="Password" />
        <StyledButton type="submit" />
      </StyledForm>
    </LoginContainertainer>
  );
};

export default Login;
