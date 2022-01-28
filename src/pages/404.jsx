import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorMessage = styled.h1`
  font-weight: bold;
`;
const NotFound = () => {
  return (
    <Container>
      <ErrorMessage>404 | Page Not Found</ErrorMessage>
    </Container>
  );
};

export default NotFound;
