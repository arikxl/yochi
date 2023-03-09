import React from 'react';
import styled from 'styled-components';
import TreatmentsHome from './TreatmentsHome';

const TestimoniesStyled = styled.section`
    height: 80vh;
    position: relative;
    align-items: center;
    display: flex;
    video{
      width: 100%;
      height: 80vh;
      object-fit: cover;
      position: absolute;
      z-index: -1;
    }
`;


const Testimonies = () => {
  return (
    <TestimoniesStyled>
      <video autoPlay loop muted
        src="https://cdn.coverr.co/videos/coverr-touching-plants-7850/1080p.mp4" />

      <TreatmentsHome />
    </TestimoniesStyled>
  )
}

export default Testimonies