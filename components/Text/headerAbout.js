import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: flex-start;
justify-content: flex-start;

`

const HeaderCont = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width: 69rem;
gap: 1rem;
padding-top: 8rem
`

const Stroke = styled.div`
background-image: url('../../graphics/strokeRow.gif');
width: 250px;
height: 50px;
background-size: cover;
`

const StrokeCont = styled.div`

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


export default function HeaderAbout({ text }) {
    return (
        <Wrapper>

            <HeaderCont>
                <HeaderTextBlack>About</HeaderTextBlack>
                <HeaderTextPink>Me</HeaderTextPink>
            </HeaderCont>

            <StrokeCont><Stroke></Stroke></StrokeCont>
        </Wrapper>
    );
};

