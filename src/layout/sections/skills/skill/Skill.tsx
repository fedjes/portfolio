import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string
    skillTitle: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillCardTitle>{props.skillTitle}</SkillCardTitle>
        </StyledSkill>
    )
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SkillCardTitle = styled.h3`

`