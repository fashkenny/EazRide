import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import {FaLocationDot} from "react-icons/fa"
// import { BsCalendarDateFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <NavHolder>
            <Holder>
              <Logo>LOGO</Logo>
              <Navigations>
                <Navs to="/">Home</Navs>
                <Navs to="About">About Us</Navs>
                <Navs to="Services">Services</Navs>
                <Navs to="Contact">Contact Us</Navs>
              </Navigations>
              <Auth>
                  <Button1>Log in</Button1>
                  <Button2>Sign Up</Button2>         
              </Auth>
            </Holder>
          </NavHolder>       
        </Main>
      </Container>
    </div>
  );
};
export default Header;

// const AuthBtn = styled.div`
//   text-decoration: none;
//   display: flex;
// `;
const Button2 = styled.button`
  text-decoration: none;
  color: white;
  background-color: #298bed;
  width: 90px;
  height: 35px;
  padding: 0px 8px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid silver;
  outline: none;
`;
const Button1 = styled.button`
  text-decoration: none;
  color: dodgerblue;
  font-weight: bold;
  width: 90px;
  height: 35px;
  padding: 0px 8px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid dodgerblue;
  outline: none;
  margin-right: 10px;
`;

const Auth = styled.div`
  display: flex;
`;
const Navs = styled(NavLink)`
  display: flex;
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;
const Navigations = styled.div`
  display: flex;
 
  margin-right: 10px;
`;
const Logo = styled.div`
    color:#fff;
`;
const Holder = styled.div`
  height: 70px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const NavHolder = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: transparent ; */
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  position: relative;
 
 
`;


























// const Icon3 = styled(MdOutlinePeopleAlt)``
// const Guest = styled.div``;
// const Icon2 = styled(BsCalendarDateFill)``;
// const Date = styled.div``;
// // const Icon1 = styled()``
// // const Icon = styled(FaLocationDot)``

// const Bar = styled.div``;
// const ButtonBar = styled.div``;
// const LocationBar = styled.div``;

//   padding: 15px 0px 0px 8px;
//   width: 280px;
//   font-size: 14px;
//   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
// `;