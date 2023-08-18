import './../../styles/slider.css';
import { S } from './Slider_Styles';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

type SlidePropsType = {
    content: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.SlideContent>
                {props.content}
            </S.SlideContent>
            <S.SlideName>
                @{props.userName}
            </S.SlideName>
        </S.Slide>
    )
}

const items = [
    <Slide content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti non quibusdam tempore ut? Aperiam consequatur enim excepturi illo libero quod ut voluptatem voluptatum. Animi et, laborum minima molestias odio perferendis?"}
            userName={"test1"}/>,
    <Slide content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti non quibusdam tempore ut? Aperiam consequatur enim excepturi illo libero quod ut voluptatem voluptatum. Animi et, laborum minima molestias odio perferendis?"} 
            userName={"test2"}/>,
    <Slide content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti non quibusdam tempore ut? Aperiam consequatur enim excepturi illo libero quod ut voluptatem voluptatum. Animi et, laborum minima molestias odio perferendis?"} 
            userName={"test3"}/>
];

export const Slider: React.FC = () => (
    <S.Slider>
        <AliceCarousel
        mouseTracking
        items={items}
        
        />
    </S.Slider>
   
);