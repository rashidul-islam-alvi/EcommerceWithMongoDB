import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Mail } from "@material-ui/icons";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
  outline: none;
  border-style: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  margin: 0;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              DisPisDis.
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Log in
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Mail />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ShoppingCart />
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
