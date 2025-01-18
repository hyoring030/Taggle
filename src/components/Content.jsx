import React from 'react';
import styled from "styled-components";
import { ReactComponent as Ellipse } from "../assets/Ellipse.svg";
import {ReactComponent as Point } from "../assets/ThreePoint.svg"



const BoxDiv = styled.div`
    display: flex;
    background-color: white;
    width: 90vw;
    height: 30vh;
    border-radius: 0.5rem;
    margin-left: 5vw;
    margin-top: 1rem;
    flex-direction: column;
`;

const UserDiv = styled.div`
    display: flex;
    margin-left: 4vw;
    margin-top: 1rem;
    
`;
const Name = styled.p`
    color: black;
    font-size: medium;
    margin-bottom: 0.2rem;
    margin-top: 0;
`;
const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.7rem;
`
const Time = styled.p`
    color: black;
    font-size: smaller;
    margin-top: 0;
`;
const FollpwButton = styled.button`
    background-color: #EEA861;
    width: 17vw;
    height: 4vh;
    text-align: center;
    color: white;
    border-radius: 0.3rem;
    font-size: small;
    margin-left: 33vw;
`;

const PointButton = styled.button`
    margin-left: 0.1rem;
    margin-top: 0.5rem;
    width: 0;
    height: 3vh;
    background-color: transparent;
`;

const ContentTitle = styled.h4`
    display: flex;
    margin-left: 4vw;
    margin-top: 1rem;
    color: black;

`;

const InBox = styled.div`
    border: 10px;
    border-color: #BECAD1;
    border-radius: 0.5rem;
    width: 80vw;
    height: 10vh;
    background-color: beige;
    margin-left: 5vw;
    margin-bottom: 2vh;
`;

function Content() {
  return (
  <BoxDiv>
    <UserDiv>
    <Ellipse/>
    <NameDiv>
    <Name>최효리</Name>
    <Time>12시간 전</Time>
    </NameDiv>
    <FollpwButton>팔로우</FollpwButton>
    <PointButton><Point/></PointButton>
    </UserDiv>
    <ContentTitle>이렇게 힙한 어쩌고</ContentTitle>
    <InBox>;)</InBox>
  </BoxDiv>
  )
}

export default Content;