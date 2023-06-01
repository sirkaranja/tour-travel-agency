import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Plan Your Travel With Tripelo
          </h1>


          <p className="subTitle">
            Travel to your favourite city with respectful of the environment
          </p>

          <button className='btn'>
            <a href="#">Explore Now</a>

          </button>
        </div>
        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination'  />
          </div>
          <div className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder='11 metres'  />
          </div>
          <div className="priceDiv">
            <label htmlFor="location">price</label>
            <input type="text" placeholder='$140-$500'  />
          </div>
          <button className='btn '>Search</button>

        </div>

      </div>
    </section>
  )
}

export default Home
