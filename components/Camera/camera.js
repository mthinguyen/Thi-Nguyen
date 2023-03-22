import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

const Container = styled.div`
  height: 500px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.5s ease-in-out;
  transform: ${({ showSecondImage }) =>
    showSecondImage ? 'translateY(-100%)' : 'translateY(0)'};
`;

const ClickableImage = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleClick = () => {
    setShowSecondImage((prevValue) => !prevValue);
  };

  return (

    <Container className="imageContainer">
    </Container>
  );
};

export default ClickableImage;
