import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import { S } from './Contacts_Styles';

export const Contacts:React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.FormContact>
                    <S.FormContactField placeholder={"Name"}></S.FormContactField>
                    <S.FormContactField placeholder={"Them"}></S.FormContactField>
                    <S.FormContactField placeholder={"Your message"} as={"textarea"}></S.FormContactField>
                    <StyledButton type={"submit"}>Send message</StyledButton>
                </S.FormContact>
            </Container>
        </S.Contact>
    );
};


