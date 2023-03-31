import styled from 'styled-components';
import { handleScroll } from '../Scroll/scroll';
import { useState, useEffect } from 'react';
import MusicButton from '../Button/musicButton';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
  // position: fixed;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #F8F6F4;
  background-color: rgb(248,246,244, .8);
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: 4rem;
  padding: 0;
`;

const NavItem = styled.li`

`;

const NavLink = styled.div`
  color: #363630;
  font-family: Golos Bold;
  font-size: 14pt;
  text-decoration: none;
  transition: 300ms ease;
  padding: 6pt;
  padding-left: 18pt;
  padding-right: 18pt;
  border-radius: 32pt;

  &:hover {
    color: #b6f4f4;
    background-color: #e77cae;
    // font-family: Baguede;
  }
`;

const IconLi = styled.div`
  font-family: Golos;
  padding: 4pt;
  font-size: 14px;
  text-align: left;
  transition: linear 100ms;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  width: 18pt;
  height: 18pt;
  background-size: cover;

  &:hover {
    background-image: ${props => props.hoverBackgroundImage ? `url(${props.hoverBackgroundImage})` : "none"};
}
  }
`;

const NavLi = styled.div`
  color: #363630;
  font-family: Golos;
  padding: 4pt;
  font-size: 14px;
  transition: 300ms ease;

  &:hover {
    color: #86BA90;
  }
`;

const NavButton = styled.div`
color: #FFCC32;
font-family: Baguede;
background-color: #363630;
padding: 6pt;
padding-left: 18pt;
padding-right: 18pt;
border-radius: 32pt;
transition: 300ms ease;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: .5rem;

&:hover {
  background-color: #FFCC32;
  color: #363630;
}
`

const NavBar = () => {
  return (
    <NavContainer>
      <NavLink onClick={() => handleScroll('homeSection')}>Thi Nguyen.</NavLink>
      <NavList>
        <NavItem>
          <NavLi onClick={() => handleScroll('workSection')}>Home</NavLi>
        </NavItem>
        <NavItem>
          <NavLi onClick={() => handleScroll('workSection')}>Work</NavLi>
        </NavItem>
        <NavItem>
          <NavLi onClick={() => handleScroll('aboutSection')}>About</NavLi>
        </NavItem>
      </NavList>

      {/* <NavButton onClick={() => handleScroll('contactSection')}>
        <IconLi
          backgroundImage="../../icons/volume.png"
          hoverBackgroundImage="../../icons/volumeBlack.png"
        />
        Sound</NavButton> */}
      <MusicButton></MusicButton>
    </NavContainer>
  );
};

export default NavBar;
