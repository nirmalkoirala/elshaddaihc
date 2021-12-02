import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#01BF71' : '#01BF71')};
    max-height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        width: 100%;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    align-items: flex-start;
    max-width: -10px;
    max-height: -10px;
    margin-left: 1rem;
    
    @media screen and (max-width: 760px) {
        align-items: flex-start;
        margin-left: 1rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none; 
    text-align:  center;
    margin-right: -10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    height : 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 22px;
    height: 100%;
    cursor: pointer;
    margin: 5px 20px;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavBTnLink = styled.div`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding : 10px 22px;
    border-radius: 5px;
    margin : 10px 60px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;