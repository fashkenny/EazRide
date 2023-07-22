import React from "react";
import styled from "styled-components";
import Around from "../../Pages/Around";
// import pic from "../../Assets/relocations.jpg";
// import img from "../../Assets/pexels.jpg";
import black from '../../Assets/black.webp'
import loading from '../../Assets/loading.jpg'
import move from '../../Assets/move.jpg'

const GlobalCard = () => {
  return (
    <div>
      <Container >
        <Around
          img={black}
          text={
            <div>
              Trust us with <span>swift</span> deliverty
            </div>
          }
          subText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore blanditiis praesentium vitae et ducimus, rerum aperiam expedita illo excepturi assumenda corporis deleniti, sed molestiae corrupti aliquid consequatur, cum dignissimos dicta?"
        />
         <Around
          reverse="y"
          img={move}
          text={
            <div>
              Trust us with <span>swift</span> deliverty
            </div>
          }
          subText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore blanditiis praesentium vitae et ducimus, rerum aperiam expedita illo excepturi assumenda corporis deleniti, sed molestiae corrupti aliquid consequatur, cum dignissimos dicta?"
        />
         <Around
          img={loading}
          text={
            <div>
              Trust us with <span>swift</span> deliverty
            </div>
          }
          subText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore blanditiis praesentium vitae et ducimus, rerum aperiam expedita illo excepturi assumenda corporis deleniti, sed molestiae corrupti aliquid consequatur, cum dignissimos dicta?"
        />

     
      </Container>
    </div>
  );
};

export default GlobalCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`;
