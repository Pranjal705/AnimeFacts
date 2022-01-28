import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 1000;
  color: #0e0d0d;
`;
const Fact = styled.p`
  margin: 20px 0px;
  cursor: pointer;
`;

const Anime = () => {
    let navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const { anime_name } = useParams();

  const [animeImage, setAnimeImage] = useState("");

  useEffect(() => {
    async function loadAnimes() {
      await axios
        .get(`http://localhost:4000/api/v1/${anime_name}`)
        .then((value) => {
          //   console.log(value.data);
          updateData(value);
        })
        .catch(() => navigate("/404"));
    }
    loadAnimes();
  }, [1]);

  function updateData(value) {
    setAnimes(value.data["data"]);
    setAnimeImage(value.data["img"]);
  }

//   console.log(animes);
 
    return (
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image src={animeImage} />
          </ImageContainer>
          <InfoContainer>
            <Title>{anime_name}</Title>

            {animes.map((item) => (
              <Link to={"/api/v1/" + anime_name + "/" + item.fact_id}>
                <Fact>Fact {item.fact_id}</Fact>
              </Link>
            ))}
          </InfoContainer>
        </Wrapper>
      </Container>
    );
  

};

export default Anime;
