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

const BigParaText = styled.text`
color: #363630;
text-align: left;
font-size: 16px;
line-height: 30px;
font-family: General Sans;
font-family: Golos;
`;


const BigPara = () => {
    return (

        <Cont>
            {/* <BigParaText>I&#39;m an aspiring UX/UI designer base in the rainy Vancouver. My dedication is to 
                create intuitive interfaces that enhance human interactions. I'm passionate with design, art, and photography.</BigParaText> */}



            <BigParaText>As an UX/UI designer, I am passionate about creating intuitive and visually compelling digital
                experiences.</BigParaText>

            <br />
            <br />

            <BigParaText>More than anything, I am seeking for a team that share
                my passion to create exceptional digital experiences. Together, we can create long lasting, meaningful impact on people's lives and
                the world that we are living in.
            </BigParaText>
        </Cont>

    );
};

export default BigPara;