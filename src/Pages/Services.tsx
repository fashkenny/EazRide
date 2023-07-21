import React from "react";
import styled from "styled-components";
import {BsFillStarFill} from 'react-icons/bs'
import {FaFirstOrderAlt} from 'react-icons/fa'
import {BiCurrentLocation} from 'react-icons/bi'

const Services = () => {
  return (
    <div>
      <Container>
        <Main>
          <Content>
            <TextHolder>
              <Text>We offer the best Services</Text>
            </TextHolder>

            <Destination>
              <ImageHold>
                <Icon1 />
              </ImageHold>
              <StarText>
                <Title>Choose Destination</Title>
                <SubTitle>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto nisi inventore in est iusto suscipit.
                </SubTitle>
              </StarText>
            </Destination>

            <Star>
              <ImageHold>
                <Icon2 />
              </ImageHold>
              <DText>
                <Title>Top star</Title>
                <SubTitle>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ab impedit itaque nemo ipsum rem.
                </SubTitle>
              </DText>
            </Star>


            <Air>
              <ImageHold>
                <Icon3/>
              </ImageHold>
              <DText>
                <Title>Bookings</Title>
                <SubTitle>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum, ab? Ullam, dolorum! Molestiae, fugiat aspernatur!
                </SubTitle>
              </DText>
            </Air>
          </Content>
        </Main>
      </Container>
    </div>
  );
};

export default Services;

const Air = styled.div`
     display: flex;
   align-items: center;
`;
const StarText = styled.div``;
const Star = styled.div`
     display: flex;
   align-items: center;
`;
const SubTitle = styled.div``;
const Title = styled.div``;
const DText = styled.div``;
const Icon3 = styled(FaFirstOrderAlt)``;
const Icon2 = styled(BiCurrentLocation)``;
const Icon1 = styled(BsFillStarFill)``;
const ImageHold = styled.div`
   background-color: silver;
   width: 70px;
   height: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const Destination = styled.div`
   display: flex;
   align-items: center;
   
`;
const Text = styled.div`
   font-size: 24px; 
   font-weight: 700;
   display: flex;
   justify-content: center;
   text-transform:capitalize
`;
const TextHolder = styled.div`
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 300px;
  /* background-color: yellow; */
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-height: 300px;
  /* background-color: red; */
`;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: teal; */
`;
