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
import img1 from '../../Assets/Machu-Picchu.jpg'
import img3 from '../../Assets/italy.jpg'
import img4 from '../../Assets/mtkenya.jpg'
import img2 from '../../Assets/wall.jpg'


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
    imgSrc:img4,
    destTitle:'Horn of Africa',
    location:'Djibouti',
    price:'Ksh 90,000'
  },{
    id:6,
    imgSrc:img4,
    destTitle:'Pretoria',
    location:'South Africa',
    price:'Ksh 190,000'
  },{
    id:7,
    imgSrc:img4,
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
         
         
        </div>


      </div>
    </section>
  )
}


export default Offers
