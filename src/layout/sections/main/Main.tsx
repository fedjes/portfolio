import React from 'react';
import photo from '../../../assets/img/U7Rkl2fkJhI.webp';
import { S } from './Main_Styles';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <S.MainTextContent>
                        <S.HelloMain>
                            Hi There
                        </S.HelloMain>
                        <S.NameMain>
                            I am Fedjes Kat
                        </S.NameMain>
                        <S.MainTitle>A Front-end Developer</S.MainTitle>
                    </S.MainTextContent>
                    <S.PhotoWrapper>
                        <S.PhotoMain src={photo} alt="photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

