import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper justify={"space-around"}>
                <Skill iconId={'code'} skillTitle={'html'}/>
                <Skill iconId={'ts'} skillTitle={'typescript'}/>
                <Skill iconId={'react'} skillTitle={'react'}/>
                <Skill iconId={'css'} skillTitle={'css'}/>
                <Skill iconId={'figma'} skillTitle={'figma'}/>
                <Skill iconId={'stCom'} skillTitle={'styledComponents'}/>
            </FlexWrapper>
        </StyledSkills>
    )
};

const StyledSkills = styled.section`
  min-height: 30vh;
`