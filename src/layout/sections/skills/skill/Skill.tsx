import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import { S } from './../Skills_Styles';
import {FlexWrapper} from "../../../../components/FlexWrapper";


type SkillPropsType = {
    iconId: string
    title: string
    content: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.OneSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillTextContent>{props.content}</S.SkillTextContent>
            </FlexWrapper>
        </S.OneSkill>
    );
};

// const OneSkill = styled.div`
//     width: 330px;
//     flex-grow: 1;
//     padding: 62px 20px 40px;

//     @media ${theme.media.mobile} {
//         padding: 62px 0px 40px;
//     }
//     `
// const SkillTitle = styled.h3`
//     margin: 70px 0 15px;
//     text-transform: uppercase;
//     `
// const SkillTextContent = styled.p`
//   text-align: center;
  
// `

// export const IconWrapper = styled.div`
//   position: relative;
  
//   &::before {
//     content: "";
//     display: inline-block;

//     width: 80px;
//     height: 80px;
//     transform: rotate(45deg) translate(-50%, -50%);
//     background-color: rgba(255, 255, 255, 0.10);
    
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform-origin: top left;
//   }
// `