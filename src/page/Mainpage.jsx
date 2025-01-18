import React from "react";
import styled from "styled-components";
import "normalize.css";
import { ReactComponent as BellIcon } from "../assets/tabler_bell.svg";
import { ReactComponent as Firecon } from "../assets/fire.svg";
import Content from "../components/Content"



const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f7f5;
`;


const Button = styled.button`
  background: none;
  margin-top: 3vh;
  margin-left: 87vw;
  border: none;
  svg {
    width: 24px;
    height: 24px;
  }
`;
const TItle = styled.div`
  font-size: large;
  border-right: 10vw;
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.36vw;
  //gap: 1rem;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Mainpage = () => {
  return (
    <BackgroundDiv>
      <Button>
        <BellIcon />
      </Button>
      <TitleDiv>
        <TItle>HOT</TItle>
        <Firecon />
      </TitleDiv>
      <Content></Content>
    </BackgroundDiv>
  );
};
