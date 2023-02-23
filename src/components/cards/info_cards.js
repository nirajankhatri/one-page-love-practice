import React from 'react'
import Card from './card/card'
// import '../../sass/components/_cards.scss'

const Info_Cards = () => {
  return (
    <div className='card-container'>
        <Card heading="10X" title="The designer" description="Starter has halped designers stop away from being a 3x designer." />
        <Card heading="900%" title="Return on Investment" description="Starter has halped designers stop away from being a 3x designer." />
        <Card heading="2K+" title="Components" description="Starter has halped designers stop away from being a 3x designer." />
    </div>
  )
}

export default Info_Cards