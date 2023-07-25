import React from 'react';
import photo from '../../../assets/img/U7Rkl2fkJhI.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <TextContentMain>
                    <StyledTitleMain>Developer Front-end</StyledTitleMain>
                    <StyledNameMain>Alialsei Turtsevich</StyledNameMain>
                    <StyledDescText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloremque fugit libero, odit placeat quo? Commodi ea, est sit soluta tenetur unde! Accusantium eum explicabo laboriosam quos sint vitae voluptatum.
                    </StyledDescText>
                </TextContentMain>
                    <StyledPhoto src={photo} alt="photo"/>

            </FlexWrapper>
        </StyledMain>
    );
};

const StyledPhoto = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`

const StyledMain = styled.section`
 min-height: 60vh;
`

const TextContentMain = styled.div`

`

const StyledTitleMain = styled.h1`

`
const StyledNameMain = styled.h2`

`
const StyledDescText = styled.p`

`