import styled, { keyframes } from 'styled-components'

const HeaderCont = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-end;
width: 69rem;
gap: 1rem;
padding-bottom: 1.5rem;
padding-top: 2rem;
padding-left: 1.5rem;
height: 45vh;
`

const Stroke = styled.div`
background-image: url('../../graphics/stroke.gif');
width: 50pt;
height: 50pt;
background-size: cover;
`

const HeaderTextBlack = styled.h2`
padding-top: 4rem;
color: #363630;
text-align: center;
font-size: 60pt;
line-height: 50pt;
font-family: Baguede;
display: inline-block;
`;

const HeaderTextPink = styled.h2`
padding-top: 4rem;
color: #e77cae;
text-align: center;
font-size: 60pt;
line-height: 50pt;
font-family: General Sans Bold;
display: inline-block;
`;


export default function HeaderWork({text}) {
    return (

        <HeaderCont>
            <Stroke></Stroke>
            <HeaderTextBlack>Passionate</HeaderTextBlack>
            <HeaderTextPink>Designer,</HeaderTextPink>
        </HeaderCont>

        
    );
};

