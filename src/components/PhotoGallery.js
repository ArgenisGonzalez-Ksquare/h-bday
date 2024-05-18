import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import image3 from '../assets/Estudio.jpg';
import image2 from '../assets/Etsuko.jpg';
import image1 from '../assets/Fondo.jpg';
import image4 from '../assets/Nosotros.jpg';
import image5 from '../assets/Playa.jpg';
import image6 from '../assets/Usa.jpg';

const photos = [
  {
    src: image1,
    width: 4,
    height: 3
  },
  {
    src: image2,
    width: 4,
    height: 3
  },
  {
    src: image3,
    width: 4,
    height: 3
  },
  {
    src: image4,
    width: 4,
    height: 3
  },
  {
    src: image5,
    width: 4,
    height: 3
  },
  {
    src: image6,
    width: 4,
    height: 3
  },
];

const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* 4:3 aspect ratio (height / width * 100) */
  overflow: hidden;
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhotoGallery = () => {
  return (
    <Carousel>
      {photos.map((photo, index) => (
        <PhotoContainer key={index}>
          <Photo src={photo.src} alt={`Foto ${index + 1}`} />
        </PhotoContainer>
      ))}
    </Carousel>
  );
};

export default PhotoGallery;
