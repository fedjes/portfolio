import React from 'react';
import photo from '../../../assets/img/U7Rkl2fkJhI.webp';
import { S } from './Main_Styles';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <S.MainTextContent>
                        <S.HelloMain>
                            Hi There
                        </S.HelloMain>
                        <S.NameMain>
                            I am Fedjes Kat
                        </S.NameMain>
                         <S.MainTitle>
                            <p>A Front-end Developer</p>
                        <Typewriter
                            options={{
                                strings: ['A Front-end Developer','A Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 200,
                            }}
                        />
                        </S.MainTitle>
                    </S.MainTextContent>
                    <S.PhotoWrapper>
                        <S.PhotoMain src={photo} alt="photo" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

