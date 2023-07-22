import styled from "styled-components";
// import relocate from "../../Assets/relocations.jpg";
import pexels from "../Assets/pexels.jpg"
// import Header from "./Header";

const Heropage = () => {
  return (
    <div>
      <Container>
        {/* <Header/> */}
        <Main>
          <Content>
            <Text>
              <Title>
                Bringing in comfort <br /> to your reach.
              </Title>
              <SubText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus aut magnam dolorem adipisci? <br /> Impedit
                nesciunt eos ad voluptas corporis molestias?
              </SubText>
            </Text>
            <Trip>
              <Button>Plan your trip</Button>
            </Trip>
      
          </Content>
        </Main>
      </Container>
    </div>
  );
};

export default Heropage;

const Button = styled.div`
  width: 250px;
  height: 45px;
  background-color: dodgerblue;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
`;
const Trip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #fff;
  text-transform: capitalize;
  text-align: center;
  font-size: 55px;
  font-weight: 700;
  margin-top: 40px;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  font-family: Poppins;
`;

const SubText = styled.div`
  color: white;
  text-align: center;
  margin-top: 15px;
`;
const Text = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  height: 500px;
  width: 100%;
  flex-direction: column;
  /* margin-top:45px; */
`;

const Main = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 450px;
  /* position: absolute; */
  top: 0;
  
`;
const Container = styled.div`
   background-image: url(${pexels});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  /* width: 100%; */

`;
