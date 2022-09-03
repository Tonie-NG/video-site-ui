import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Thumbnail from "../images/portfolio1.jpg";

const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "35px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "50%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => (props.type === "sm" ? "none" : "block")};
`;

const Text = styled.div``;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0;
`;

function Card({ type }) {
  return (
    <Link to="video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={Thumbnail} />
        <Details type={type}>
          <ChannelImage type={type} src={Thumbnail} />
          <Text>
            <Title>Test Video</Title>
            <ChannelName>Tonie Youtube</ChannelName>
            <Info>660,908 views . 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
