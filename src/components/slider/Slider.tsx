import React from 'react';
import { S } from './Slider_Styles';
import {FlexWrapper} from "../FlexWrapper";


export  const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.SlideContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti non quibusdam tempore ut? Aperiam consequatur enim excepturi illo libero quod ut voluptatem voluptatum. Animi et, laborum minima molestias odio perferendis?
                    </S.SlideContent>
                    <S.SlideName>Test Name</S.SlideName>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

