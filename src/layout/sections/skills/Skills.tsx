import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillData = [
       {
              iconId: "code",
              title: "html5",
              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "css",
              title: "css3",
              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "figma",
              title: "figma",
              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "react",
              title: "react",
              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "stCom",
              title: "styled component",
              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "ts",
              title: "type script",
              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
]


export const Skills: React.FC = () => {
    return (
        <StyledSkillsS>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                     {skillData.map( (el, index) =>{
                            return <Skill iconId={el.iconId} key={index}
                            title={el.title} 
                            content={el.content} />
                     } )}
                </FlexWrapper>
            </Container>
        </StyledSkillsS>
    );
};

const StyledSkillsS = styled.section`
  
`

