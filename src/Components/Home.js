import React from 'react'
import trolley from '../Assests/trolley.png'
import phone from '../Assests/smartphone.png'

const Home = () => {
  return (
    <div>
        <div className='add-to-cart'>
        <img src={trolley} alt="Cart"/>
        </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src={phone} alt="Phone"/>
        </div>
        <div className='text-wrapper'>
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className='btn-wrapper'>
            <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
