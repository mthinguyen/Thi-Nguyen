import styles from '../../styles/Contact.module.css';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link';

const Cont = styled.div`
background-color: #363630;
border-radius: 60pt;
display: flex; 
flex-direction: row;
justify-content: center;
align-items: center;
height: 40pt;
padding: 1rem;
gap: 2rem;
width: 17.5rem;
z-index:99;
`;

const IconLi = styled.div`
  font-family: Golos;
  padding: 4pt;
  font-size: 14px;
  text-align: left;
  transition: linear 300ms;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  width: 25pt;
  height: 25pt;
  background-size: cover;


  &:hover {
    background-image: ${props => props.hoverBackgroundImage ? `url(${props.hoverBackgroundImage})` : "none"};
}
  }
`;




export default function IconBar() {

    return (
        <Cont>
          <Link href="https://www.linkedin.com/in/thi-nguyen-2b4572216/">
            <IconLi 
            backgroundImage="../../icons/linkedin.png"
            hoverBackgroundImage="../../icons/linkedinYellow.png"
            />
            </Link>
            <Link href="https://github.com/mthinguyen">
            <IconLi 
            backgroundImage="../../icons/github.png" 
            hoverBackgroundImage="../../icons/githubYellow.png" 
            />
            </Link>
            <Link href="https://dribbble.com/thinguyenn">
            <IconLi 
            backgroundImage="../../icons/dribble.png"
            hoverBackgroundImage="../../icons/dribbleYellow.png" 
            />
            </Link>
            <Link href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:3588ab1a-82d4-3b04-b95e-ffd4df05cd55">
            <IconLi 
            backgroundImage="../../icons/cv.png"
            hoverBackgroundImage="../../icons/cvYellow.png" 
            />
            </Link>
            
        </Cont>
    )
}