import React from "react";
import styled from "styled-components";
import { IoMdContact } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { resolve } from "path";
import { useDispatch } from "react-redux";
import { logInUserGlobal } from "../Global/authGlobal";
import { signInUser } from "../Utils/authApi";
import { useNavigate, Link } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const model = yup.object().shape({
    userName: yup.object().required(),
    email: yup.object().required(),
    password: yup.object().required(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (res: any) => {
    signInUser(res).then((res: any) => {
      dispatch(logInUserGlobal(res));
      navigate("/");
    });
  });

  return (
    <div>
      <Container>
        <Card>
          <Left onSubmit={onSubmit}>
            <InputHold>
              <Icon />
              <Input placeholder="Email" {...register("email")} />
            </InputHold>

            <InputHold1>
              <Icon />
              <Input placeholder="Password" {...register("password")} />
              {/* <Email>password</Email> */}
              {}
            </InputHold1>

            <Terms>
              <Sub>
                I've read and agree to <span>Terms&Conditions</span>
              </Sub>
            </Terms>
            <Link to="signUp">
              <Button>
                <Btn>Sign In</Btn>
              </Button>
            </Link>
          </Left>

          <Right>
            <Text1>Glad to see You!</Text1>
            <SubText>Trust us with with delivery of your goods.</SubText>
          </Right>
        </Card>
      </Container>
    </div>
  );
};

export default LogIn;

const Email = styled.div`
  /* display: flex;
  justify-content: flex-end; */
  /* flex-direction: column; */
`;
const SubText = styled.div`
  text-align: center;
  font-size: 12px;
  color: white;
`;

const Btn = styled.button`
  background: linear-gradient(to right, #5be7fe, #52bbff, #50b1fe);
  outline: none;
  border: 1px solid #52bbff;
  border-radius: 4px;
  height: 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

const Button = styled.div`
  margin-top: 20px;
`;

const Sub = styled.div``;
const Terms = styled.div`
  font-size: 10px;
  margin-top: 5px;
  text-align: center;
  span {
    color: #4eaffe;
    font-weight: 700;
  }
`;
const Text1 = styled.div`
  color: white;
  font-family: poppins;
  text-align: center;
  font-weight: 600;
`;
const Right = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4px;
  background: linear-gradient(to right, #5be7fe, #52bbff, #50b1fe);
`;
const Input = styled.input`
  height: 30px;
  width: 100%;
  padding-left: 25px;
  border-radius: 50px;
  outline: none;
  border: 1px solid silver;
  box-shadow: 0px 0px 10px 0px #5becff;
`;
const Icon = styled(IoMdContact)`
  margin-right: -23px;
  z-index: 1;
  color: #58ddfe;
  font-size: 22px;
`;
const InputHold1 = styled.div`
  height: 30px;
  width: 80%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: sans-serif, Geneva, Tahoma;
`;
const InputHold = styled.div`
  height: 30px;
  width: 80%;
  margin-top: 90px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: sans-serif, Geneva, Tahoma;
`;

const Left = styled.div`
  width: 55%;
  /* height: ; */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Card = styled.div`
  width: 470px;
  height: 310px;
  background-color: #fff;
  box-shadow: 0px 0px 1px 1px #fff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
