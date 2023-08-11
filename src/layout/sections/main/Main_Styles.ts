import {theme} from "../../../styles/Theme";
import { font } from '../../../styles/Comman';
import styled from "styled-components";

const PhotoMain = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const Main = styled.section`
  min-height: 100vh;
  display: flex;
`

const MainTextContent = styled.div`
    
    `

const MainTitle = styled.h1`
  ${font({weight: 400, fMax: 27, fMin:20})}
`

const NameMain = styled.h2`
  ${font({family: '"Josefin Sans" , sans-serif', weight: 700, fMax: 50, fMin:36})}
  letter-spacing: 2.5px;
  margin: 10px 0;

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const HelloMain = styled.h2`
  font-size: 14px;
  font-weight: 400;

`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

export const S = {
    PhotoMain,
    Main,
    MainTextContent,
    MainTitle,
    NameMain,
    HelloMain,
    PhotoWrapper,

}