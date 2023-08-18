import React, { useState } from 'react';

import styled from "styled-components";

import {Work} from "./work/Work";
import socialImg from "../../../assets/img/prod1.png";
import timer from "../../../assets/img/prod2.png"
import {TabMenu, TabsStatusType} from "./tabmenu/TabMenu";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";


const tabsItems: Array<{status:TabsStatusType ,title:string}> = [
    {
        title:"All",
        status:"all"
    },
    {
        title:"Landing page",
        status:"landing"
    },
    {
        title:"React",
        status:"react"
    },
    {
        title:"spa",
        status:"spa"
    },
]
const worksData = [
    {title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa"
},
    {title: "Timer",
    src: timer,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react"
},
]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;
    if(currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if(currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if(currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value:TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <SectionWorks id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} 
                        changeFilterStatus={changeFilterStatus}
                        currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                {filteredWorks.map( (w,index)=>{
                    return <Work title={w.title} key={index}
                    src={w.src}
                    text={w.text}/>
                } )}
                </FlexWrapper>
            </Container>
        </SectionWorks>
    );
};

const SectionWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`