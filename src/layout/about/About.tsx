import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About me</SectionTitle>
            <FlexWrapper maxW={"500px"} margin={"0 auto"}>
                <TextContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto delectus, dolores earum esse est, fuga fugit nesciunt omnis, quidem recusandae sapiente sequi! Adipisci consequuntur doloremque, id labore perferendis saepe?
                </TextContent>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`

`

const TextContent = styled.p`

`