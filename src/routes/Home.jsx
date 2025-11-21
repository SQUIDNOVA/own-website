import React from 'react'
import HomePageBanner from '../components/Home/HomePageBanner'
import CompanyFeatures from '../components/Home/CompanyFeatures'
import ServiceBanner from '../components/Home/ServiceBanner'

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <CompanyFeatures />
      <ServiceBanner />
    </div>
  )
}
