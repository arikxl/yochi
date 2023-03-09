import React from 'react';
import styled from 'styled-components';

const HomeInfoStyled = styled.section`
    
    flex:1;
    background-color: yellow;
    height: auto;
     /* @media (max-width: 400px){
        height: auto;
    } */
`;

const HomeInfo = () => {
  return (
      <HomeInfoStyled>HomeInfo</HomeInfoStyled>
  )
}

export default HomeInfo