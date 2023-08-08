import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>LOGO</Logo>
          <Navigations>
            <Navs>Home</Navs>
            <Navs>Home</Navs>
            <Navs>Home</Navs>
          </Navigations>
          <Button>
            <Text>Bookings</Text>
          </Button>
        </Main>
      </Container>
    </div>
  );
};

export default HomePage;

const Text = styled.div``;
const Button = styled.div`
   background-color:dodgerblue;
   color: #fff;
   border-radius: 4px;
   height: 45px;
   width: 150px;
   font-size: 20px;
   font-family: poppings;
   font-weight: 700;
   display: flex;
   justify-content: center;
   align-items: center;

`;

const Navs = styled.div`
  margin-right: 10px;
`;

const Navigations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div``;
const Main = styled.div`
  width: 90%;
  height: inherit;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: teal; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
