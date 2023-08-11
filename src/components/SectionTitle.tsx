import styled from "styled-components";
import {theme} from "../styles/Theme";
import { font } from "../styles/Comman";



export const SectionTitle = styled.h2`
  text-align: center;
  ${font({family:'"Josefin Sans" , sans-serif', weight: 600, fMax: 36, fMin: 30})}
  letter-spacing: 5px;
  margin-bottom: 90px;
  
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    width: 50px;
    height: 1px;
    background-color:  ${theme.colors.accent};
    
    
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform:  translateX(-50%);

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
  
`

