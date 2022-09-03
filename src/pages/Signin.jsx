import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({ theme }) => theme.soft};
`;

const Hr = styled.hr`
  margin: 1rem 0px;
  border: 1px solid ${({ theme }) => theme.soft};
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
`;
const Input = styled.input`
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid ${({ theme }) => theme.soft};
  background: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  margin: 5px 0;
  cursor: pointer;
  fontweight: 500;
  background-color: ${(props) => (props.type === "up" ? "teal" : "blue")};
  color: white;
`;

function Signin() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign-in</Title>
        <Subtitle>To continue to TonTube</Subtitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Hr />
        <Title>Or</Title>
        <Input placeholder="email" />
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button type="up">Sign Up</Button>
      </Wrapper>
    </Container>
  );
}

export default Signin;
