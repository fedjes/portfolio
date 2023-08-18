import React from 'react';
import styled from "styled-components";
import {TabLink} from "../../../../components/LinkAll";

export type TabsStatusType = "all" | "react" | "spa" | "landing";


 type TabMenuPropsType = {
    tabsItems: Array<{status:TabsStatusType ,title:string} >
    changeFilterStatus: (value: TabsStatusType) => void 
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType ) => {
    return (
        <StyledTubMenu>
            <ul>
                {props.tabsItems.map((el, index)=>{
                    return <ListItem key={index}>
                        <TabLink active={props.currentFilterStatus === el.status} as={"button"} onClick={()=>{props.changeFilterStatus(el.status)}}>{el.title}</TabLink>
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