import React from 'react'
// import '../../sass/components/_pricingSection.scss'
import Pricing_card from './pricing_card/pricing_card'

const Pricing_section = () => {
  return (
    <div className='pricing-section'>
        <Pricing_card />
        <Pricing_card />
        <Pricing_card />
    </div>
  )
}

export default Pricing_section