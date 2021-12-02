import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Background from '../../images/smalll.png';


import 
{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
    NavBtn
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

const toggleHome = () => {
    scroll.scrollToTop();
};

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                    <img src={ Background }/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home' 
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='aboutus'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='values'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Values</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contactus'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                    <NavBtn>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
