import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Fondo.jpg';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>¡Feliz Cumpleaños, Mi Amor!</Title>
      <Subtitle>No hay palabras para expresar lo agradecido que estoy con Dios y la vida por ponerte en mi camino. Eres un ser humano increible, eres una mujer valiente, multifacética y tenaz. Eres bella, hermosa en todo los sentidos de la palabra. Como dice la Biblia: </Subtitle>
      <Verse>"Eres toda hermosa, amiga mía, y en ti no hay mancha." (Cantar de los Cantares 4:7)</Verse>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  color: white;
  text-align: center;
  overflow: hidden;
  

  @media (max-width: 430px) {
    padding: 0 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(251, 194, 235, 0.85), rgba(166, 193, 238)),
      url(${backgroundImage}) no-repeat center center/cover;
    opacity: 0.5; /* Ajusta la opacidad aquí */
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Poetsen One', sans-serif;
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);

  @media (max-width: 430px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  @media (max-width: 430px) {
    font-size: 1.2rem;
  }
`;

const Verse = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  font-style: italic;

  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;
export default Header;
