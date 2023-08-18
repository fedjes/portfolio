import React from "react";
import { S } from "../headerSMenu/HeaderMenu_Styles"; 

// const headerItems = ["Home", "Skills", "Works", "Testimony", "Contact"]
const headerItems = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contact",
        href: "contact"
    },
    ]

export const Menu:React.FC= () => {
    return (
        <ul>
                {headerItems.map((el, index)=>{
                    return <S.ListItem key={index}>
                        <S.Link href={`#${el.href}`}>{el.title}</S.Link>
                    </S.ListItem>
                })}
            </ul>
    );
};

