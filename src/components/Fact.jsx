import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  background-color: #3d3c3c;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin: 10px 20px;
`;
const Hr = styled.hr`
  background-color: #d65bd0;
  margin: 0px 20px;
  width: 360px;
  border: none;
  height: 3px;
`;
const Info = styled.div`
  margin: 10px 20px;
`;
const AnimeFact = styled.p`
  color: white;
`;

const Fact = ({ fact }) => {
  const { anime_name } = useParams();
  return (
    <Container>
      <Wrapper>
        <Title>{anime_name}</Title>
        <Hr></Hr>
        <Info>
          <AnimeFact>{fact}</AnimeFact>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Fact;
