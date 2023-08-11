import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import { S } from './Footer_Styles';

const socialItemData = [
  {
    iconId:"inst"
},
  {
    iconId:"teleg"
},
  {
    iconId:"vk"
},
  {
    iconId:"linkedIn"
},
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
            <S.NameDev>Fedjes</S.NameDev>
            <S.SocialList>
            {socialItemData.map( (s,index)=>{
                        return <S.SocialItem>
                        <S.SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId} key={index}/>
                        </S.SocialIconLink>
                    </S.SocialItem>
                      } )}
            </S.SocialList>
            <S.Copyright>© 2023 Fedjes Kat, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

