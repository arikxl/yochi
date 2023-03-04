import React from 'react'
import Waves from '../components/App/Waves'
import Hero from '../components/Hero'
import HomeAboutMe from '../components/HomeAboutMe'
import HomeLogos from '../components/HomeLogos'
import Testimonies from '../components/Testimonies'
import TreatmentsHome from '../components/TreatmentsHome'


const HomePage = () => {
  return (
      <>  
      <Hero />
      <Waves />
      <HomeAboutMe />
      <TreatmentsHome />
      <Testimonies />
      <HomeLogos />
      </>
  )
}

export default HomePage