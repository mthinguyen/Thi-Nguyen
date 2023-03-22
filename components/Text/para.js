import styled, { keyframes } from 'styled-components'

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40rem;
padding-top: 1rem;
padding-right: 6rem;
`

const ParaText = styled.text`
padding-top: 1rem;
padding-bottom: 1rem;
color: #363630;
text-align: left;
font-size: 16px;
line-height: 28px;
font-family: Golos;


width: ${props => props.widwidth};
text-align: ${props => props.txtalign};
padding: ${props => props.padding};
// margin ${props => props.margin};
`;


export default function Paragraph({
    text = "Sample Text",
    wdth = "0",
    align = "left",
    margin = '0',
    padding = '0',
    onText = () => { },
}) {
    return (
        // <Cont>
            <ParaText
                padding={padding} txtalign={align} widwidth={wdth} onClick={onText}>
                {text}
            </ParaText>
        // </Cont>

    );
};

