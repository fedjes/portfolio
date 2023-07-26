import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <NameDev>Let's be Friends</NameDev>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"inst"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"teleg"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedIn"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Fedjes Kat, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 30vh;
  background-color: #214a5e;
  
`

const NameDev = styled.span`

`
const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
 
`
const SocialItem = styled.li`
  margin-right: 10px;
`
const SocialIconLink = styled.a`

`
const Copyright = styled.small`

`