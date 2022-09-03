import {
  ReplyOutlined,
  SaveOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import CommentInput from "../components/CommentInput";
import Comments from "../components/Comments";
import Thumbnail from "../images/portfolio1.jpg";

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 1rem 2rem;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 5px;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;

const VideoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const VideoInfoDetails = styled.div`
  display: flex;
`;
const Subscribe = styled.button`
  padding: 0.7rem;
  background-color: red;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 300;
`;

const Channelimage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Channeltext = styled.div`
  margin: 0 1rem;
`;
const Channeltitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Channelname = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0;
`;
function Videopage() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/mNOmZIRYtbY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>500,0000 views . 3 days ago</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlined /> 123,458
            </Button>
            <Button>
              <ThumbDownAltOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <SaveOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <VideoInfo>
          <VideoInfoDetails>
            <Channelimage src={Thumbnail} />
            <Channeltext>
              <Channeltitle>Test Video</Channeltitle>
              <Channelname>Tonie Youtube</Channelname>
              <Info>660,908 views . 1 day ago</Info>
            </Channeltext>
          </VideoInfoDetails>
          <Subscribe>SUBSCRIBE</Subscribe>
        </VideoInfo>
        <Hr />
        <CommentInput />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </Content>

      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
}

export default Videopage;
