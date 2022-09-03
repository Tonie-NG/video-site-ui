import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  height:: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  height: 100%;
  padding: 15px 20px;
  position: relative;
`;

const Input = styled.input`
  padding: 0.3rem;
  border-radius: 5px;
  background-color: transparent;
  border: none;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  right: 2rem;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input />
          <SearchIcon />
        </Search>
        <Link
          to="/signin"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
