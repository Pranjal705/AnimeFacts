import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: purple;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Logo>AnimeFacts.</Logo>
        </Center>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
