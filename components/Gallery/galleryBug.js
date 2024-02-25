import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Rest of your styled components...

const GalleryItem = styled.div`
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

a {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
}

  /* Additional styles for cursor pointer */
  cursor: pointer;
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
`;

const GalleryBug = ({ title, items }) => {
  return (
    <div>
      <Title>{title}</Title>
      <GalleryCont>
        {items.map((item) => (
          <GalleryItem key={item.id}>
            <Link href={`/projects/${item.id}`} passHref>
              <a>
                <GalleryImage imageUrl={item.imageUrl} alt={item.title} />
                <GalleryTitleOverlay>
                  <Title>{item.title}</Title>
                </GalleryTitleOverlay>
              </a>
            </Link>
          </GalleryItem>
        ))}
      </GalleryCont>
    </div>
  );
};

export default GalleryBug;
