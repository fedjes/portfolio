import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export  const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <SlideContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti non quibusdam tempore ut? Aperiam consequatur enim excepturi illo libero quod ut voluptatem voluptatum. Animi et, laborum minima molestias odio perferendis?
                    </SlideContent>
                    <SlideName>Test Name</SlideName>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
    text-align: center;
    
`
const SlideName = styled.span`
  font-family: "Josefin Sans" , sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`
const SlideContent = styled.p`
    
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255, 0.5);
    
    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`