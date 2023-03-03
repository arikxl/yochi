import React from 'react';
import styled from 'styled-components';
import { topTreatments } from '../data/data';
import HeroBtn from './buttons/HeroBtn';
import HeroBtn1 from './buttons/HeroBtn1';
import HeroBtn2 from './buttons/HeroBtn2';

const Top4Home = styled.section`
  /* height: 70vh; */
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding: 5% 0;
  justify-content: space-between;
  gap: 2%;
  @media (max-width: 400px){
    padding: 0;
    gap: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* margin-bottom: -15%; */
  }
`;

const TreatmentCardStyled = styled.article`
  width: 24%;
  background-image:url( ${props => props.img});
  height: 70vh;
  border-bottom : 4px solid var(--pink); 
  border-left : 4px solid var(--pink); 
  border-radius: 0 10px 0 30px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 400px){
    width: 90%;  
    border-bottom : 6px solid var(--pink); 
    border-left : 6px solid var(--pink); 
    border-bottom : 6px solid  linear-gradient(90deg, blue 0%, rgba(253,29,29,1) 100%);
    margin-bottom: 15%;  
      height: 50vh;
  }

  h3{
    margin: 10%;
    font-size: 180%;
    color: var(--pink);
    text-shadow: 2px 2px black;

    @media (max-width: 400px){
    font-size: 220%;
    }
  }
  
  button{
    margin:0 0 10% 10%;
    align-self: flex-end;
    background-color: white;
    border: none;
    color: var(--pink);
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 24px;
    border-bottom : 2px solid var(--pink); 
    border-left : 2px solid var(--pink); 
    border-radius: 0 5px 0 15px;
    
    transition: 0.3s;
    @media (max-width: 400px){
      font-size: 1.3rem;
      padding: 10px 30px;

    }
    
    :hover{
      transform: scale(1.1);
    }
  }
`;

const TreatmentsHome = () => {
  return (
    <Top4Home>
      {
        topTreatments.map((t) => (
          <TreatmentCardStyled key={t.id} img={t.img}>
            <h3>
              {t.title}
            </h3>
            <button>להזמנת טיפול</button>
          </TreatmentCardStyled>
        ))
      }
    </Top4Home>
  )
}

export default TreatmentsHome