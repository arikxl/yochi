import React from 'react';
import styled from 'styled-components';

const AboutStyled = styled.main`
  width: 100%;
  height: 100vh;
  height: calc( 100vh -  3.8rem);

  
  
  video{
    height: calc( 100% -  3.8rem);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .wrapper{
    position: absolute;
    width:100% ;
    height: 100% ;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .overlay{
    background-color:rgba(0,0,0,0.1);
    position: absolute;
    top:0;
    left:0 ;
    width:100%;
    height:100%;
    margin-top: 3.8rem;

  }
`;

const AboutPage = () => {
  return (
    <AboutStyled>
      <video autoPlay loop muted
        src="https://res.cloudinary.com/arikxl/video/upload/v1677789012/Ella2023/gzrvjd2u1sjduhr9wglh.mp4" />
      <div className="overlay"></div>
      <div className='wrapper'>
        <h1>About page</h1>
        <p>test</p>
      </div>
    </AboutStyled>
  )
}

export default AboutPage