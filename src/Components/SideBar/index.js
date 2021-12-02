import React from 'react';
// import {scroll} from 'react-scroll';
import { 
    SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink,
    SideBtnWrap, SidebarRoute
 } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

    //     const [scrollNav, setScrollNav] = useState(false);
    
    //     const changeNav = () => {
    //         if(window.scrollY >=80) {
    //             setScrollNav(true);
    //         } else{
    //             setScrollNav(false);
    //         }
    //     }
    //     useEffect(() => {
    //         window.addEventListener('scroll', changeNav)
    //     }, [])
    

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            {/* <Icon onClick={toggle}>
                <CloseIcon />
            </Icon> */}
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="aboutus" onClick={toggle}>About Us</SidebarLink>
                    <SidebarLink to="contactus" onClick={toggle}>Contact Us</SidebarLink>
                    <SidebarLink to="values" onClick={toggle}>Values</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
