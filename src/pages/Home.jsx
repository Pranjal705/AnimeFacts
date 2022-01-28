import React from "react";
import styled from "styled-components";
import Animes from "../components/Animes";
import Header from "../components/Header";

const Container = styled.div``;
const Home = () => {
  return (
    <Container>
      <Header />
      <Animes />
    </Container>
  );
};

export default Home;
