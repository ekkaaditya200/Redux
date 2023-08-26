import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='add-to-cart'>
            <img src="https://icons8.com/icon/42382/shopping-cart" alt="Error"/>
        </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="https://source.unsplash.com/featured/300x201" alt="Error"/>
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
