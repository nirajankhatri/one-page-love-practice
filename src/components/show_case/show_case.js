import React from 'react'
import NightFLoat from '../../assets/images/NightFLoat.png';
// import '../../sass/components/_showCase.scss'

const Show_case = () => {
  return (
    <div className='show-case'>
        <h1 className='show-case-title'>Take on and handle more design projects at once</h1>
        <p className='show-case-desc'>Starter allows you to design projects and finish them in a flash, which means you can handle more design projects at once and earn more money.</p>
        <div className='show-case-image-cntainer'>
            <img className='show-case-image' src={NightFLoat} />
        </div>
    </div>
  )
}

export default Show_case