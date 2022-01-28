import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Fact from "../components/Fact";

const Container = styled.div``;
const FactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Facts = () => {
  let navigate = useNavigate();
  const [fact, setFact] = useState("");
  const { fact_id } = useParams();
  const { anime_name } = useParams();

  useEffect(() => {
    async function loadFact() {
      await axios
        .get(`http://localhost:4000/api/v1/${anime_name}/${fact_id}`)
        .then((value) => setFact(value.data["data"].fact))
        .catch(() => navigate("/404"));
    }
    loadFact();
  }, []);

  return (
    <Container>
      <FactContainer>
        <Fact fact={fact} />
      </FactContainer>
    </Container>
  );
};

export default Facts;
