
import styled, { useTheme } from "styled-components"
import {Link as LinkR } from "react-router-dom";
import { DiCssdeck } from 'react-icons/di';
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { Bio } from "../../data/constants";

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    color: ${({theme}) => theme.text_primary};
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px) {
        padding: 0 0px;
    }

`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color:  ${({theme}) => theme.text_primary};
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px) {
        display: none;
    }   

`;

const NavLink = styled.a`
        color:  ${({theme}) => theme.text_primary};
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        &:hover {
            color:  ${({theme}) => theme.primary};
        }
`;

const ButtonContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: end;
        width: 80%;
        height: 100%;
        padding: 0 6px;
        @media screen and (max-width: 640px) {
            display: none;
        }
`;

const GitHubButton  = styled.button`
    border: 1.8px solid ${({theme}) => theme.primary};
    border-radius: 20px;
    color :  ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    &:hover {
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
    }

    @media screen and (max-width: 640px) {
        font-size: 0.8rem;

    }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const MobileLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme()
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </a>
                    </NavLogo>
                    <MobileIcon>
                    <FaBars onClick={() => {
                        setOpen(!open)
                        }} />
                    </MobileIcon>
                    <NavItems>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href='#skills'>Skills</NavLink>
                        <NavLink href='#experience'>Experience</NavLink>
                        <NavLink href='#projects'>Projects</NavLink>
                        <NavLink href='#education'>Education</NavLink>
                    </NavItems>
                    <ButtonContainer >
                        
                            <GitHubButton ><LinkR to="https://github.com/VanstrahlenAlex?tab=repositories" target="_blank">Github Profile</LinkR></GitHubButton>
                        
                    </ButtonContainer>
                </NavContainer>
                {
                    open && (
                        <div dir="rtl">
                            <div className="bg-purple-300 relative h-12 w-22">
                                <MobileMenuLink className=" flex flex-col rounded-lg p-10 m-10 absolute h-14 w-10 top-0 start-0" open={open}>
                                            <MobileLink  href="#about" onClick={() => {setOpen(!open)}}>About</MobileLink>
                                            <MobileLink  href='#skills' onClick={() => {setOpen(!open)}}>Skills</MobileLink>
                                            <MobileLink  href='#experience' onClick={() => {setOpen(!open)}}>Experience</MobileLink>
                                            <MobileLink  href='#projects' onClick={() => {setOpen(!open)}}>Projects</MobileLink>
                                            <MobileLink  href='#education' onClick={() => {setOpen(!open)}}>Education</MobileLink>
                                            <GitHubButton  style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}}  target="_blank">
                                                <LinkR to="https://github.com/VanstrahlenAlex?tab=repositories" target="_blank">
                                                    Github Profile
                                                </LinkR>
                                            </GitHubButton>
                                </MobileMenuLink>
                            </div>
                        </div>
                    )
                }
            </Nav>
        </>
    )
}

export default Navbar
