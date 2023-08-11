import React from 'react';

import styled from "styled-components";

import {Work} from "./work/Work";
import socialImg from "../../../assets/img/prod1.png";
import timer from "../../../assets/img/prod2.png"
import {TabMenu} from "./tabmenu/TabMenu";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

const worksItemsMenu = ["All", "landing page", "React", "spa"];
const workData = [
    {title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
},
    {title: "Timer",
    src: timer,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
},
]
export const Works: React.FC = () => {
    return (
        <SectionWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItemsMenu}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                {workData.map( (w,index)=>{
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