import React from 'react'
import Memberlist from '../components/About/Memberlist'
import AboutCompany from '../components/About/AboutCompany'
// import OurVision from '../components/About/OurVision'
import OurMission from '../components/About/OurMission'
import Achivements from '../components/About/Achivements'

export default function About() {
  return (
    <div>
      <AboutCompany/>
      {/* <OurVision /> */}
      <OurMission />
      <Achivements />
      <Memberlist />
    </div>
  )
}
