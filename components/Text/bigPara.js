import styled, { keyframes } from 'styled-components'

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:40rem;
padding-top: 1rem;
padding-right: 6rem;
`

const BigParaText = styled.text `
color: #363630;
text-align: left;
font-size: 18px;
line-height: 30px;
font-family: General Sans;
font-family: Golos;
`;


const BigPara = () => {
    return (

        <Cont>
            <BigParaText>I&#39;m an aspiring UX/UI designer base in the rainy Vancouver. My dedication is to 
                create intuitive interfaces that enhance human interactions. I'm passionate with design, art, and photography.</BigParaText>
        </Cont>

    );
};

export default BigPara;