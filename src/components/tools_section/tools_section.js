import React from 'react'
import Tools_container from './tools_container'
// import '../../sass/components/_toolsSection.scss' 

const Tools_section = () => {
  return (
    <div className='tools-section'>
        <div className='tools-section-heading'>
            <h3>Integrations</h3>
            <h1>Connect to your favorite tools</h1>
            <p>With over 200 integrations, we make to continue using the software you love.</p>
        </div>
        <Tools_container />
        <button className='tools-section-btn'>See all 200+ integrations</button>
    </div>
  )
}

export default Tools_section