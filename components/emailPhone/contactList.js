import styles from '../../styles/Contact.module.css';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link';

const Cont = styled.div`
display: flex; 
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 2rem;
`;

const Icon = styled.div`
background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
width: 35px;
height: 35px;
background-size: cover;
`

const IconLi = styled.div`
font-family: Golos;
padding: 2pt;
font-size: 16px;
text-align: left;
transition: linear 300ms;
color: #363630;

display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
`

export default function ContactList() {
    return (
        <Cont>
            <IconLi>
                <Icon
                    backgroundImage="../../icons/gmail2.png"
                >
                </Icon>
                thi.minh963@gmail.com
            </IconLi>

            <IconLi>
                <Icon
                    backgroundImage="../../icons/phone2.png"
                >
                </Icon>
                778 814 6935
            </IconLi>

            <IconLi>
                <Icon
                    backgroundImage="../../icons/location2.png"
                >
                </Icon>
                Burnaby, BC V3N 1W9
            </IconLi>
        </Cont>
    )

}