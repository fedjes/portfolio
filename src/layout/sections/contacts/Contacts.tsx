import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledFormContact>
                    <StyledFormContactField placeholder={"Name"}></StyledFormContactField>
                    <StyledFormContactField placeholder={"Them"}></StyledFormContactField>
                    <StyledFormContactField placeholder={"Your message"} as={"textarea"}></StyledFormContactField>
                    <StyledButton type={"submit"}>Send message</StyledButton>
                </StyledFormContact>
            </Container>
        </StyledContact>
    );
};


const StyledContact = styled.section`

`
const StyledFormContact = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`
const StyledFormContactField = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: ${theme.colors.font};
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`