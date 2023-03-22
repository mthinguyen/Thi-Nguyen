import styled, { keyframes } from 'styled-components'

const HeaderCont = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-end;
width: 69rem;
gap: 1rem;
padding-bottom: 0rem;
padding-top: 8rem;
padding-left: 1.5rem;
`

const Stroke = styled.div`
background-image: url('../../graphics/stroke.gif');
width: 50pt;
height: 50pt;
background-size: cover;
`

const HeaderTextBlack = styled.h2`
padding-top: 2rem;
color: #363630;
text-align: center;
font-size: 68pt;
line-height: 50pt;
font-family: Baguede;
display: inline-block;
`;

const HeaderTextPink = styled.h2`
padding-top: 2rem;
color: #e77cae;
text-align: center;
font-size: 68pt;
line-height: 50pt;
font-family: General Sans Bold;
display: inline-block;
`;


export default function HeaderWork({text}) {
    return (

        
        <HeaderCont>
            <Stroke></Stroke>
            <HeaderTextBlack>My</HeaderTextBlack>
            <HeaderTextPink>Work</HeaderTextPink>
            
        </HeaderCont>

    );
};

