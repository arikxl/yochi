import React from 'react'
import styled from 'styled-components';


const HomeContactStyled = styled.section`
    height: 80vh;
    width:100%;
    display: flex;
    padding: 2rem 0;
    background-color: red;
     @media (max-width: 400px){
        height: auto;
        flex-direction: column;
    }


`;

const HomeContact = () => {
  return (
    <HomeContactStyled>
      HomeContact
    </HomeContactStyled>
  )
}

export default HomeContact