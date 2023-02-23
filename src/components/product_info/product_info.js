import React from 'react'
// import '../../sass/components/_productInfo.scss'
import img1 from '../../assets/images/img1.png'; 

const Product_info = () => {
  return (
    <div className='product-info-container'>
        <div className='product-image-container'>
            <img src={img1} />
        </div>
        <div className='product-info'>
            <h1>Design faster</h1>
            <p>Starter allows you to put together landing pages piece by piece in a matter of minutes--not weeks.</p>
            <ul>
                <li>2,000+ users</li>
                <li>Thousands of components</li>
                <li>Mobile layouts</li>
            </ul>
        </div>
    </div>
  )
}

export default Product_info