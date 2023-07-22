import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import { FaFirstOrderAlt } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import img1 from "../Assets/truck.webp";

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
                <Icon3 />
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
          <ImageContent>                          
              <Img1 src={img1} />       
          </ImageContent>
        </Main>
      </Container>
    </div>
  );
};

export default Services;

const Img1 = styled.img`
   object-fit: cover;
   border-radius: 20px;
`;
const Air = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const ImageContent = styled.div``;
const StarText = styled.div``;
const Star = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 5px;
`;
const Title = styled.div`
  margin-bottom: 5px;
  font-weight: 500;
  margin-left: 5px;
`;
const DText = styled.div`
  /* margin-top: 16px; */
`;
const Icon3 = styled(FaFirstOrderAlt)``;
const Icon2 = styled(BiCurrentLocation)``;
const Icon1 = styled(BsFillStarFill)``;
const ImageHold = styled.div`
  background-color: #ffff;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 10px 5px lightgray;
  align-items: center;
  margin-right: 10px;
  /* box-shadow: -8px 2px 21px 4px rgba(166, 156, 156, 0.96);
  -webkit-box-shadow: -8px 2px 21px 4px rgba(166, 156, 156, 0.96);
  -moz-box-shadow: -8px 2px 4px 4px rgba(166, 156, 156, 0.96); */
  /* box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2); */
`;
const Destination = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  font-family: poppins;
  justify-content: center;
  text-transform: capitalize;
`;
const TextHolder = styled.div``;
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
