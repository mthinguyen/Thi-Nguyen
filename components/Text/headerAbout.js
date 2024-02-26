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
padding-top: 2rem
`

const Stroke = styled.div`
background-image: url('../../graphics/strokeRow.gif');
width: 220px;
height: 40px;
background-size: cover;
`

const StrokeCont = styled.div`

`

const HeaderTextBlack = styled.h2`
padding-top: 4rem;
color: #363630;
text-align: center;
font-size: 58pt;
line-height: 50pt;
font-family: Baguede;
display: inline-block;
`;

const HeaderTextPink = styled.h2`
padding-top: 4rem;
color: #e77cae;
text-align: center;
font-size: 58pt;
line-height: 50pt;
font-family: General Sans Bold;
display: inline-block;
`;


export default function HeaderAbout({ text }) {
    return (
        <Wrapper>

            <HeaderCont>
                <HeaderTextBlack>Contact</HeaderTextBlack>
                <HeaderTextPink>Me</HeaderTextPink>
            </HeaderCont>

            {/* <StrokeCont><Stroke></Stroke></StrokeCont> */}
        </Wrapper>
    );
};

