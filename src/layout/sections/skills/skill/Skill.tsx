import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
    content: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <OneSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillTextContent>{props.content}</SkillTextContent>
            </FlexWrapper>
        </OneSkill>
    );
};

const OneSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
    `
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
    `
const SkillTextContent = styled.p`
  text-align: center;
  
`

export const IconWrapper = styled.div`
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;

    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.10);
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`