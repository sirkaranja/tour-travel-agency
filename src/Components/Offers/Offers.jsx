import React from 'react'
import './offers.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'

export const Offers = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural spectaculars, come see the best of
            the world!
          </p>
        </div>

        <div className="minContainer grid">
          <div className="singleOffer">
            <div className="destImage">
              <img src="img" alt="Image Name" />

              <span className='discount'>
                30% off
              </span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>Ksh 7000</h4>
                <span className='status'>
                  For rent
                </span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  < MdKingBed  className='icons'/>
                  <small>2 Beds</small>
                </div>
                <div className="singleAmenity flex">
                  < MdBathtub  className='icons'/>
                  <small>1 Bath</small>
                </div>
                <div className="singleAmenity flex">
                  < FaWifi className='icons'/>
                  <small>Wi-Fi</small>
                </div>
                <div className="singleAmenity flex">
                  < MdAirportShuttle  className='icons'/>
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location flex">
                < MdLocationOn className='icons' />
                <small>450 Vine #320, London</small>

              </div>
              <button className='btn flex'> 
              View Details</button>
              
              


            </div>

          </div>
        </div>


      </div>
    </section>
  )
}


export default Offers
