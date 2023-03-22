import React from 'react';
import styled, { keyframes } from 'styled-components'
import styles from '../../styles/Gallery.module.css'
import record from '../../data/projects.json'


const GalleryCont = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-row: 1fr 1fr 1fr;
justify-content: space-around;
align-items: center;
gap: 16pt;
`;


const GalleryItem = styled.div`
// // background-image: ${({ imageUrl }) => `url(${imageUrl})`};
// background-size: cover;
transition: 400ms ease;
width: 260pt;
height: 260pt;
border-radius: 2pt;

color: #363630;
font-family: General Sans;
padding: 4pt;
font-size: 12pt;

position: relative;
overflow: hidden;
cursor: pointer;

// &:hover {
//   background-image: url('../../graphics/projectOverlay.svg');
//   opacity: .6;
}
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 500ms ease-in-out;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;

  &:hover {
    background-image: url('../../graphics/projectOverlay.svg');
    opacity: 0.6;
  }
`;

const Title = styled.h3`
color: #363630;
font-family: General Sans;
padding: 4pt;
text-align: center;
font-size: 12pt;
position: relative;

`

const GalleryTitleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // display:none;

  &:hover {
  background-image: url('../../graphics/projectOverlay.svg');
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  display: block;
}
`;

const GalleryBug = ({ title, items }) => {

  const galleryItems = [
    {
      id: 1,
      imageUrl: '../../covers/trackStacks.jpg',
      // imageUrl: 'https://via.placeholder.com/300x300',
      title: 'TrackStacks',
      alt: 'TrackStacks Project Cover',
    },
    {
      id: 2,
      imageUrl: '../../covers/tinyPaws.jpg',
      title: 'TinyPaws',
      alt: 'TinyPaws Project Cover',
    },
    {
      id: 3,
      imageUrl: '../../covers/moreIs.jpg',
      title: 'More Is More',
      alt: 'More Is More Project Cover',
    },
    {
      id: 4,
      imageUrl: '../../covers/mindFull.jpg',
      title: 'TrackStacks',
      alt: 'Mind Full Project Cover',
    },
    {
      id: 5,
      imageUrl: '../../covers/caseClosed.jpg',
      title: 'Case Closed',
      alt: 'Case Closed Project Cover',
    },
  ];


  return (

    // <GalleryCont>
    //   {galleryItems.map((item) => (
    //     <GalleryItem
    //       key={item.id}
    //       imageUrl={item.imageUrl}
    //       alt={item.alt}
    //       title={item.title}>
    //       <Title />
    //     </GalleryItem>
    //   ))}
    // </GalleryCont>

    <div>
      <Title>{title}</Title>
      <GalleryCont>

        {galleryItems.map(item => (
          <GalleryItem key={item.id}>
            
            <GalleryImage imageUrl={item.imageUrl} alt={item.title} />

            <GalleryTitleOverlay>
              <Title>{item.title}</Title>
            </GalleryTitleOverlay>
          </GalleryItem>
        ))}
      </GalleryCont>
    </div>


  );
};

export default GalleryBug;
