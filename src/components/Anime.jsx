import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const AnimeName = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;
  background-color: #080808;
  &:hover {
    transform: scale(1.1);
  }
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf5fd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 350px;
  width: 255px;
  object-fit: cover;
`;

const Name = styled.span`
  color: white;
`;

const Anime = ({ item }) => {
  return (
    <Link to={"/api/v1/" + item.anime_name}>
      <Container>
        <Image src={item.anime_img} />
        <Info>
          <AnimeName>
            <Name>
              <b>{item.anime_name}</b>
            </Name>
          </AnimeName>
        </Info>
      </Container>
    </Link>
  );
};

export default Anime;
