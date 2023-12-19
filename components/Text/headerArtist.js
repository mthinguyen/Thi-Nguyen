import styled, { keyframes } from 'styled-components'

const HeaderCont = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-end;
width: 56rem;
gap: 1rem;
padding-bottom: 1.5rem;
`

const HeaderTextBlack = styled.h2`
color: #363630;
text-align: center;
font-size: 60pt;
line-height: 50pt;
font-family: Baguede;
display: inline-block;
`;

const HeaderTextYellow = styled.h2`
color: #FFCC32;
text-align: center;
font-size: 60pt;
line-height: 50pt;
font-family: General Sans Bold;
display: inline-block;
`;


export default function headerArtist({text}) {
    return (

        <HeaderCont>
            <HeaderTextBlack>Creative</HeaderTextBlack>
            <HeaderTextYellow>Artist,</HeaderTextYellow>
        </HeaderCont>

        
    );
};

