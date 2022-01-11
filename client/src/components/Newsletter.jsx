import React from "react";
import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 35%;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  border: 1 px solid grey;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  background: none;
  outline: none;
  padding-left: 20px;
  flex: 8;
  font-size: 20px;
`;
const Button = styled.button`
  margin-left: 10px;
  flex: 1;
  background-color: white;
  color: teal;
  border: 1px teal solid;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite product</Description>

      <InputContainer>
        <Input placeholder="Your Email here..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
