import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <a href="">
                    <li>Contacts</li>
                </a>
                <a href="">
                    <li>Projects</li>
                </a>

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap: 20px;
    list-style: none;
  }
`