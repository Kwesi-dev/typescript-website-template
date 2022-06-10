import React from 'react'
import FeatureFirst from '../../pages_sections/homepage_sections/featureFirst/FeatureFirst'
import FeaturesSecond from '../../pages_sections/homepage_sections/featuresSecond/FeaturesSecond'
import Home from '../../pages_sections/homepage_sections/home/Home'
import Promopage from '../../pages_sections/homepage_sections/promopage/Promopage'
import SearchSection from '../../pages_sections/homepage_sections/searchSection/SearchSection'

const Mainhome = () => {
  return (
    <>
        <Home/>
        <Promopage/>
        <FeatureFirst/>
        <FeaturesSecond/>
        <SearchSection/>
    </>
  )
}

export default Mainhome