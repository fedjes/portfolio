import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Comman";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const NameDev = styled.span`
  ${font({family:'"Josefin Sans", sans-serif', weight: 700, fMax: 22, fMin:16})}
  letter-spacing: 3px; 
`
const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`
  margin-right: 10px;
`
const SocialIconLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`

export const S = {
    Footer,
    NameDev,
    SocialList,
    SocialItem,
    SocialIconLink,
    Copyright
}