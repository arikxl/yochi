import React from 'react';
import styled from 'styled-components';

const TestimoniesStyled = styled.section`
    height: 80vh;
    video{
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;


const Testimonies = () => {
  return (
    <TestimoniesStyled>
      <video autoPlay loop muted
        src="https://cdn.coverr.co/videos/coverr-touching-plants-7850/1080p.mp4" />
      Testimonies
    </TestimoniesStyled>
  )
}

export default Testimonies