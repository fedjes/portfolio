import React from 'react';
import photo from '../../../assets/img/U7Rkl2fkJhI.webp';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledMainTextContent>
                        <HelloMain>
                            Hi There
                        </HelloMain>
                        <NameMain>
                            I am Fedjes Kat
                        </NameMain>
                        <MainTitle>A Front-end Developer</MainTitle>
                    </StyledMainTextContent>
                    <PhotoWrapper>
                        <PhotoMain src={photo} alt="photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const PhotoMain = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const StyledMainTextContent = styled.div`
    
    `

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const NameMain = styled.h2`
  font-family: "Josefin Sans" , sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin: 10px 0;
`

const HelloMain = styled.h2`
  font-size: 14px;
  font-weight: 400;

`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`