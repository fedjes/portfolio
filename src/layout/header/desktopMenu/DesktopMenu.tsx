import React from 'react';
import { S } from '../headerSMenu/HeaderMenu_Styles';
import { Menu } from '../menu/Menu';

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
          <Menu />
        </S.DesktopMenu>
    );
};


