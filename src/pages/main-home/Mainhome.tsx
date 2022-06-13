import React from 'react'
import CTASection from '../../pages_sections/homepage_sections/cta-section/CTASection'
import FeatureFirst from '../../pages_sections/homepage_sections/featureFirst/FeatureFirst'
import FeaturesSecond from '../../pages_sections/homepage_sections/featuresSecond/FeaturesSecond'
import Home from '../../pages_sections/homepage_sections/home/Home'
import ProjectSection from '../../pages_sections/homepage_sections/projectSection/ProjectSection'
import Promopage from '../../pages_sections/homepage_sections/promopage/Promopage'
import SearchSection from '../../pages_sections/homepage_sections/searchSection/SearchSection'
import Testimonials from '../../pages_sections/homepage_sections/Testimonials/Testimonials'

const Mainhome = () => {
  return (
    <>
        <Home/>
        <Promopage/>
        <FeatureFirst/>
        <FeaturesSecond/>
        <SearchSection/>
        <ProjectSection/>
        <Testimonials/>
        <CTASection/>
    </>
  )
}

export default Mainhome