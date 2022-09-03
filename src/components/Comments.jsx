import React from "react";
import styled from "styled-components";
import Thumbnail from "../images/portfolio1.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
`;
const Name = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
const Date = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

function Comments() {
  return (
    <Container>
      <Avatar src={Thumbnail} />
      <Details>
        <Top>
          <Name>Tonie wan here</Name>
          <Date>2 days Ago</Date>
        </Top>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fuga.
        </Text>
      </Details>
    </Container>
  );
}

export default Comments;
