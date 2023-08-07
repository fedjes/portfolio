import React from 'react';
import styled from "styled-components";
import {TabLink} from "../../../../components/LinkAll";
import {theme} from "../../../../styles/Theme";
import {StyledButton} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <ImgWrapper>
                <ImgWork src={props.src}/>
                <StyledButton>view proj</StyledButton>
            </ImgWrapper>

            <DescriptionWrapper>
                <TitleWork>{props.title}</TitleWork>
                <DescriptionWork>{props.text}</DescriptionWork>
                <TabLink href={""}>demo</TabLink>
                <TabLink href={""}>work</TabLink>
            </DescriptionWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  ${TabLink} {
    padding: 10px 0;
    margin-right: 10px;
    
  }
`

const ImgWrapper = styled.div`
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }
    
    ${StyledButton} {
      opacity: 1;
    }
  }
  
  ${StyledButton} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &::before {
      width: 100%;
      height: 100%;
    }
  }
`

const ImgWork = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const TitleWork = styled.h3`
    text-transform: capitalize;
`

const DescriptionWork = styled.p`
  margin: 14px 0 10px;
`
const DescriptionWrapper = styled.div`
  padding: 25px 20px;
`