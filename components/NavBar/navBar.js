import styled from 'styled-components';
import { handleScroll } from '../Scroll/scroll';
import { useState, useEffect } from 'react';
import MusicButton from '../Button/musicButton';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`


@media (max-width: 1024px) {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 12rem;
  padding-right: 12rem;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  // background-color: #F8F6F4;
  // background-color: rgb(248,246,244, .1);

  @media (max-width: 1024px) {
    display: none;
  }

`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: 2rem;
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
}
`;

const IconLi = styled.div`
font-family: Golos;
padding: 4pt;
font-size: 15px;
text-align: left;
transition: linear 100ms;
background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
width: 18pt;
height: 18pt;
background-size: cover;

&:hover {
  background-image: ${(props) =>
    props.hoverBackgroundImage ? `url(${props.hoverBackgroundImage})` : 'none'};
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

const MobileNavIcon = styled.div`
  display: none; 
  width: 30pt;
  height: 30pt;


  @media (max-width: 1024px) {
    display: flex;
    z-index: 100;
    flex-direction: row;
    justify-content: flex-end;
  }

`;

const MobileNavMenu = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f8f6f4;
  z-index: 99;
`;

const MobileNavItem = styled(NavItem)`
  text-align: center;
`;

const MobileNavLink = styled(NavLink)`
  padding: 1rem;
`;

const HamburgerIcon = styled.div`
  display: block;
  cursor: pointer; 
  &:hover {
    color: #b6f4f4;
  }
`;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Wrapper>

        <MobileNavIcon className='mobileNavIcon' onClick={toggleMenu}>
          <Image src="/icons/menu.png" width="30" height="30"></Image>
        </MobileNavIcon>

        <NavContainer className='navContainer'>
          <Link href='/'>
            <NavLink>Thi Nguyen.</NavLink>
          </Link>

          <NavList>
            <NavItem>
              <Link href='/'>
                <NavLi>Work</NavLi>
              </Link>
            </NavItem>

            <NavItem>
              <Link href=''>
                <NavLi>Love</NavLi>
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/about'> 
              {/* <Link href='/projects/tinyPaw'>  */}
              
                <NavLi>About</NavLi>
              </Link>
            </NavItem>

            <NavItem>
              <Link
                href='https://acrobat.adobe.com/link/review?uri=urn%3Aaaid%3Ascds%3AUS%3A3588ab1a-82d4-3b04-b95e-ffd4df05cd55'
                target='_blank'
              >
                <NavLi>Resume</NavLi>
              </Link>
            </NavItem>
          </NavList>

          <MusicButton></MusicButton>
        </NavContainer>
      </Wrapper>



      {isMenuOpen && (
        <MobileNavMenu className='mobileNavMenu'>
          <MobileNavItem>
            <Link href='/'>
              <MobileNavLink onClick={toggleMenu}>Work</MobileNavLink>
            </Link>
          </MobileNavItem>

          <MobileNavItem>
            <Link href=''>
              <MobileNavLink onClick={toggleMenu}>Love</MobileNavLink>
            </Link>
          </MobileNavItem>

          <MobileNavItem>
            <Link href='/about'>
              <MobileNavLink onClick={toggleMenu}>About</MobileNavLink>
            </Link>
          </MobileNavItem>

          <MobileNavItem>
            <Link
              href='https://acrobat.adobe.com/link/review?uri=urn%3Aaaid%3Ascds%3AUS%3A3588ab1a-82d4-3b04-b95e-ffd4df05cd55'
              target='_blank'
            >
              <MobileNavLink onClick={toggleMenu}>Resume</MobileNavLink>
            </Link>
          </MobileNavItem>
        </MobileNavMenu>
      )}
    </>
  );
};


export default NavBar;
