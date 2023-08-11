
import styled, { css } from "styled-components";
import { theme } from '../../../styles/Theme';

const ListItem = styled.li`
    
`

const Link = styled.a`
  color: #7572D5;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;

  &:hover {
    color: #326fb4;
    text-decoration: underline ;
  }
`

//mobileMenu
const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 999999;
background-color: rgba(31, 31, 32, 0.90);
display: none;

${props => props.isOpen && css<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
`}

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style: none;
    flex-direction: column;
    align-items: center;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}

    position: absolute;
    left: 40px;
    bottom: 50px;

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(-45deg) translateY(0px);
    `}
    }
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(45deg) translateY(0px);
      width: 36px;
    `}
    }
  }
`

//desktopMenu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style: none;
  }

`

export const S = {
    ListItem,
    Link,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu,

}