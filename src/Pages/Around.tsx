import React from "react";
import styled from "styled-components";

interface iCard {
  text?: any;
  subText?: string;
  img?: any;
  reverse?: string;
}
const Around: React.FC<iCard> = ({ text, subText, img, reverse }) => {
  return (
    <div>
      <Container>
        <Wrapper rr={reverse}>
          <Main src={img} />
          <Content>
            <BigText>{text}</BigText>

            <SubText>{subText}</SubText>

            
            <Button>Contact Us</Button>
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Around;

const Button = styled.div`
  width: 100px;
  height: 35px;
  background-color: dodgerblue;
  border-radius: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 50%;
  height: 100%;
  font-family: sans-serif, Geneva, Tahoma;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const SubText = styled.div`
   margin-bottom: 20px;
`;
const BigText = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;

  span {
    color: dodgerblue;
    text-transform: capitalize;
  }
`;

const Main = styled.img`
  width: 45%;
  height: 100%;
  border-radius: 20px;
`;

const Wrapper = styled.div<{ rr?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 30px;
  flex-direction: ${({ rr }) => (rr ? "row-reverse" : "row")};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
