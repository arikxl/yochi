import React from 'react';
import styled from 'styled-components';

import HeaderMenu from './App/AppHeader/HeaderMenu';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { SideBarBtn } from './buttons/SideBarBtn';
import HeroBtn from './buttons/HeroBtn';
import HeroBtn1 from './buttons/HeroBtn1';
import HeroBtn2 from './buttons/HeroBtn2';

const HeroStyled = styled.section`
    
    position: relative;
    /* background-image: linear-gradient(
    rgba(130, 150, 143, 0.4),
    rgba(130, 150, 143, 0.5)
      ),
    url('https://media.giphy.com/media/d9YlzCyOsRjJbKqn0s/giphy.gif'); */


    video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    position: absolute;
  }
    background-position: center;
    background-size: cover;
    /* height:calc( 100vh - 3.8rem); */
    height: 100vh ;
    object-fit: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1, h2, h4{
      text-align: center;
      color: white;
      z-index: 10;
    }

    h1{
      /* margin:7% 0 0; */
      font-size: 4rem;
    }
    h2{
      font-size:2rem;
    }
    h4{
      font-size:1.5rem;
    }
`;

const Hero = () => {

  const windowWidth = useWindowWidth();

  return (
    <HeroStyled>
      <video autoPlay loop muted
        src="https://res.cloudinary.com/arikxl/video/upload/v1677940717/Ella2023/wqcjxocjjqfzrhmxebpa.mp4" />
        {windowWidth > 500 ? <HeaderMenu /> : <SideBarBtn />}

        <div style={{ marginTop: '4%' }}>
          <h1>יוכי עקיבא</h1>
          <h2>מגע מרפא</h2>
          <h4>רפואה משלימה ואינטגרטיבית</h4>
        </div>
        <HeroBtn />
    </HeroStyled>
  )
}

export default Hero