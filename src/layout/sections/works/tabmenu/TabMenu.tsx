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
    margin: 0 auto 40px;
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
  }
`
const ListItem = styled.li`
  
`