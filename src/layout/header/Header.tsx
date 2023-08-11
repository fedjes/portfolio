import React from 'react';
import {S} from './Header_styles';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {MobileMenu} from "./mobileMenu/mobileMenu";



const headerItems = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu menuItems={headerItems}/> 
                                        : <DesktopMenu menuItems={headerItems}/>}
                    {/* <DesktopMenu menuItems={headerItems}/>
                    <MobileMenu menuItems={headerItems}/> */}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


