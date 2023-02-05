import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';

const HeroStyled = styled.section`
    background-color: red;
    
    background-image: linear-gradient(
    rgba(130, 150, 143, 0.4),
    rgba(130, 150, 143, 0.5)
      ),
    url('https://media.giphy.com/media/d9YlzCyOsRjJbKqn0s/giphy.gif');
    background-position: center;
    background-size: cover;
    height:calc( 100vh - 3.8rem);
    object-fit: cover;
    width: 100%;
`;

const Hero = () => {
  return (
    <HeroStyled>
      <HeaderMenu />
      <h1>יוכי עקיבא</h1>
      <h2>מגע מרפא</h2>
      <h4>רפואה משלימה ואינטגרטיבית</h4>
      <button>לזימון תור</button>
    </HeroStyled>
  )
}

export default Hero