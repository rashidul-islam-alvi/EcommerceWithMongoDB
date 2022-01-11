import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Heebo", sans-serif;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: -2px 3px 3px 2px rgba(158, 158, 155, 0.8);
  -webkit-box-shadow: -2px 3px 3px 2px rgba(158, 158, 155, 0.8);
  -moz-box-shadow: -2px 3px 3px 2px rgba(158, 158, 155, 0.8);
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid teal;
  outline: none;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const LinkTag = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const CloseButtonWithTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <CloseButtonWithTitle>
          <Title>SIGN IN</Title>
          <Link to="/">
            <CloseOutlined />
          </Link>
        </CloseButtonWithTitle>

        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <LinkTag>
            <Link to="/recover">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          </LinkTag>
          <LinkTag>
            <Link to="/register">CREATE A NEW ACCOUNT</Link>
          </LinkTag>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
