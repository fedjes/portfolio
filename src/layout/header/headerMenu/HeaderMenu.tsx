import React from 'react';
import styled from "styled-components";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <HeaderStyledMenu>
            <ul>
                {props.menuItems.map((el, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{el}</Link>
                    </ListItem>
                })}
            </ul>
        </HeaderStyledMenu>
    );
};

const HeaderStyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style: none;
  }
`

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