import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const flyUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 69rem;
  gap: 1rem;
  padding-top: 1rem;
  padding-left: 1.5rem;
`;

const Stroke = styled.div`
  background-image: url('../../graphics/stroke.gif');
  width: 50pt;
  height: 50pt;
  background-size: cover;
`;

const HeaderText = styled.h2`
  text-align: center;
  font-size: 58pt;
  line-height: 50pt;
  display: inline-block;
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  animation: ${fadeIn} 1s ease-in-out, ${flyUp} 0.5s ease-in;
`;



const HeaderWork = ({ text1, text2, color1, color2 }) => {
  return (
    <HeaderCont>
      {/* <Stroke /> */}
      <HeaderText color={color1} fontFamily="Baguede">{text1}</HeaderText>
      <HeaderText color={color2} fontFamily="General Sans Bold">{text2}</HeaderText>
    </HeaderCont>
  );
};

export default HeaderWork;
