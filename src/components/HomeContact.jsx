import React from 'react'
import styled from 'styled-components';
import HomeInfo from './HomeInfo';
import HomeMap from './HomeMap';

// AIzaSyBAzU70vH - GXEkt6k3NmH6KUdXfw70Y17o
const HomeContactStyled = styled.section`
    height: 80vh;
    width:80%;
    display: flex;
    padding: 2rem 0;
    background-color: red;
    margin: 0 auto;
     @media (max-width: 400px){
        width: 100%;
        height: auto;
        flex-direction: column;
    }


`;

const HomeContact = () => {
  return (
    <HomeContactStyled>
      <HomeMap />
      <HomeInfo />
    </HomeContactStyled>
  )
}

export default HomeContact