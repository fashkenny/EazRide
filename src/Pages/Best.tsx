import React from "react";
import styled from "styled-components";
import truck2 from "../Assets/truck2.avif";

const Best = () => {
  return (
    <div>
      \
      <Container>
        <Main>
          <TextHolder>
            <Text>Our best available truck</Text>
          </TextHolder>

          <Card>
            <Box>
                <Img src={truck2} />
                </Box>
            <TextHold>
              <Title>Aicel</Title>
              <Price>₦45,000</Price>
            </TextHold>
          </Card>
        </Main>
      </Container>
    </div>
  );
};

export default Best;

const Price = styled.div``;
const Title = styled.div``;
const TextHold = styled.div``;
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
/* margin:10px 10px; */
/* margin-top:10px; */
`;
const Box = styled.div`
  background-color: #ffff;
  width: 300px;
  height: 180px;
  display: flex;
  justify-content: center;

 
  
`;
const Card = styled.div`
   width: 300px;
   height: 300px;
   border-radius: 10px;
   box-shadow: 0px 0px 10px 5px lightgray;
   overflow: hidden;
   padding: 5px 5px;

`;
const Text = styled.div``;
const TextHolder = styled.div``;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
