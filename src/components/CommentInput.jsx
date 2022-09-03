import React from "react";
import styled from "styled-components";
import Thumbnail from "../images/portfolio1.jpg";

const Container = styled.div``;
const Newcomment = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  background: transparent;
  color: ${({ theme }) => theme.text};
  width: 100%;
  text-wrap: break-word;
  &:focus {
    outline: none;
  }
`;

const Comment = styled.button`
  padding: 0.4rem;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 100;
`;

function CommentInput() {
  return (
    <Container>
      <Newcomment>
        <Avatar src={Thumbnail} />
        <Input placeholder="Add a comment..." />

        <Comment>COMMENT</Comment>
      </Newcomment>
    </Container>
  );
}

export default CommentInput;
