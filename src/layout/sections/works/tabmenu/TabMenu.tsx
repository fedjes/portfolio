import React from 'react';
import styled from "styled-components";
import {TabLink} from "../../../../components/LinkAll";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTubMenu>
            <ul>
                {props.menuItems.map((el, index)=>{
                    return <ListItem key={index}>
                        <TabLink href="">{el}</TabLink>
                    </ListItem>
                })}
            </ul>
        </StyledTubMenu>
    );
};

const StyledTubMenu = styled.nav`
  ul {
    margin-bottom: 40px;
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style: none;
  }
`
const ListItem = styled.li`
  
`