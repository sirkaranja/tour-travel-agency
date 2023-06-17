import React from 'react'
import './offers.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'


//import images 
import img from'../../Assets/airbnb.jpg'
import img1 from '../../Assets/vacay1.jpg'
import img2 from '../../Assets/vacay2.jpg'
import img3 from '../../Assets/vacay3.jpg'
import img4 from '../../Assets/vacay4.jpg'
import img5 from '../../Assets/vacay5.jpg'
import img6 from '../../Assets/vacay6.jpg'
import img7 from '../../Assets/vacay7.jpg'


//use hig order array method(MAP)

const Offer= [
  {
    id:1,
    imgSrc: img1,
    destTitle:'Machu Picchu',
    location:'Peru',
    price:'Ksh 70,000'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'The Great Wall of China',
    location:'Peru',
    price:'Ksh 70,000'
  }, {
    id:3,
    imgSrc:img3,
    destTitle:'Colosseum',
    location:'Italy',
    price:'Ksh 70,000'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Brazil',
    location:'brazil',
    price:'Ksh 170,000'
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'Horn of Africa',
    location:'Djibouti',
    price:'Ksh 90,000'
  },{
    id:6,
    imgSrc:img6,
    destTitle:'Pretoria',
    location:'South Africa',
    price:'Ksh 190,000'
  },{
    id:7,
    imgSrc:img7,
    destTitle:'Museum of kigali',
    location:'keRwandanya',
    price:'Ksh 120,000'
  }
]



 const Offers = () => {
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
        {
          Offer.map(({id, imgSrc, destTitle,location, price })=>{
            return(
              <div className="singleOffer">
              <div className="destImage">
                <img src={imgSrc} alt="Image Name" />
  
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
                View Details
                < BsArrowRightShort className='icons' />
                </button>
  
              </div>
  
            </div>
            )
          })
        }
        </div>


      </div>
    </section>
  )
}


export default Offers
