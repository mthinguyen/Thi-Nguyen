import React, { useState } from 'react';
import styles from '../../styles/Button.module.css';
import styled from 'styled-components';

const Icon = styled.div`
  font-family: Golos;
  padding: 4pt;
  font-size: 14px;
  text-align: left;
  transition: linear 100ms;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  width: 18pt;
  height: 18pt;
  background-size: cover;
`;

const Button = styled.button`
  color: #FFCC32;
  font-family: Baguede;
  background-color: #363630;
  padding: 6pt;
  padding-left: 18pt;
  padding-right: 18pt;
  border-radius: 32pt;
  transition: 300ms ease;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: .5rem;
`;

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const playMusic = () => {
    if (audio === null) {
      const newAudio = new Audio('/dream-slow.mp3');
      setAudio(newAudio);
      newAudio.play();
    } else {
      audio.play();
    }
    setIsPlaying(true);
  };

  const stopMusic = () => {
    if (audio !== null) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Button onClick={isPlaying ? stopMusic : playMusic}>
      <Icon backgroundImage={isPlaying ? "../../icons/volumePlay.png" : "../../icons/volume.png"}/>
      Sound
    </Button>
  );
};

export default MusicButton;
