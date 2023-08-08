import React from "react";
import styled from "styled-components";

export interface icard {
  IMG?: any;
  title?: string;
  price?: string;
}
const Card1: React.FC<icard> = ({ IMG, price, title }) => {
  return (
    <div>
      <Container>
        <Main>
          <TextHolder>{/* <Text>Our best available truck</Text> */}</TextHolder>

          <Card>
            <Box>
              <Img src={IMG} />
            </Box>
            <TextHold>
              <Title>{title}</Title>
              <Price>{price}</Price>
            </TextHold>
            <Button>
              <div></div>
              <TextButton>Book now</TextButton>
            </Button>
          </Card>
        </Main>
      </Container>
    </div>
  );
};

export default Card1;

const TextButton = styled.button`
  margin-top: 10px;
  border-radius: 100px;
  padding: 0px 7px;
  height: 30px;
  width: 73px;
  outline: none;
  border: none;
  background-color: dodgerblue;
  color: white;
  margin-left: 3px;
  font-weight: 500;
`;
const Button = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.div``;
const Title = styled.div``;
const TextHold = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 5px;
`;
const Box = styled.div`
  background-color: #ffff;
  width: 250px;
  height: 180px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
`;
// const Card = styled.div<{ w: string }>`
//   /* width: ${({ w }) => w} */
// `;
const Card = styled.div`
  width: 250px;
  height: 250px;
  /* margin: 0 10px; */
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px lightgray;
  overflow: hidden;
  padding: 5px 5px;
`;
const Text = styled.div``;
const TextHolder = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 25px;
  font-family: poppins;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
