import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import {FaLocationDot} from "react-icons/fa"
// import { BsCalendarDateFill } from "react-icons/bs";

const Header = () => {

 const[show, setShow] = useState<boolean>(false)
 const onChange = () => {
  if(window.scrollY >= 70) {
    setShow(true);
}else{
  setShow(false);
}
}
window.addEventListener("scroll", onChange)
  

  return (
    <div>
      {
        show?
         <Container bg="dodgerblue">
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
                 <Button1 to="/login">Bookings</Button1>
 
                 
               </Auth>
             </Holder>
           </NavHolder>
         </Main>
       </Container>
     :
      <Container bg="white, transparent">
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
              <Button1 to="/login">Log In</Button1>

              <Button2 to="/signup">Sign Up</Button2>
            </Auth>
          </Holder>
        </NavHolder>
      </Main>
    </Container>
    }
    </div>
  );
   };
export default Header;

const Button2 = styled(NavLink)`
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
  cursor: pointer;
`;
const Button1 = styled(NavLink)`
  text-decoration: none;
  color: #fff;
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
  cursor: pointer;
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
  font-family: poppins;
`;
const Navigations = styled.div`
  display: flex;

  margin-right: 10px;
`;
const Logo = styled.div`
  color: #fff;
  text-transform: uppercase;
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
const Container = styled.div<{bg:string}>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: ${({bg})=> bg}
`;
