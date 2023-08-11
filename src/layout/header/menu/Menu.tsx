import React from "react";
import { S } from "../headerSMenu/HeaderMenu_Styles"; 

export const Menu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
                {props.menuItems.map((el, index)=>{
                    return <S.ListItem key={index}>
                        <S.Link href="">{el}</S.Link>
                    </S.ListItem>
                })}
            </ul>
    );
};

