import styled from 'styled-components';
import { handleScroll } from '../Scroll/scroll';
import { useState, useEffect } from 'react';

const FootContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
  bottom: 0;
  width: 100%;
//   background-color: #FFCC32;

  width: 100%;
  background-color: #F8F6F4;
  background-color: rgb(248,246,244, .8);
  background-color: rgb(255, 204, 50, .1);
`;

const FootList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: .5rem;
  padding: 0;
  align-items: flex-end;
`;

const FootItem = styled.li`
// z-index: 99;
`;

const FootLink = styled.div`
  color: #363630;
  font-family: Golos Bold;
  font-size: 16pt;
  text-decoration: none;
`;

const FootLi = styled.div`
  color: #363630;
  font-family: Golos;
  padding: 4pt;
  font-size: 14px;
  text-align: left;
  transition: linear 200ms;


  &:hover {
    // color: #F8F6F4;
    // text-decoration: underline;
    color: #FFCC32;
    background-color: #363630;

  }
`;

const FootButton = styled.div`
color: #363630;
font-family: Baguede;
padding: 6pt;
padding-left: 18pt;
padding-right: 18pt;
border-radius: 32pt;
transition: 300ms ease;
`

const Footer = () => {
  return (
    <FootContainer>
      <FootLink onClick={() => handleScroll('homeSection')}>Thi &#40;Tea &#127861;&#41;</FootLink>

      <FootButton>&#169; 2023 Thi Nguyen</FootButton>

      <FootList>
        <FootItem>
          <FootLi onClick={() => handleScroll('homeSection')}>Home</FootLi>
        </FootItem>
        <FootItem>
          <FootLi onClick={() => handleScroll('workSection')}>Work</FootLi>
        </FootItem>
        <FootItem>
          <FootLi onClick={() => handleScroll('workSection')}>Gallery</FootLi>
        </FootItem>
        <FootItem>
          <FootLi onClick={() => handleScroll('aboutSection')}>About</FootLi>
        </FootItem>
      </FootList>


    </FootContainer>
  );
};

export default Footer;
