import React from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

//import images
import img from '../../Assets/bgImage.jpg'
import img1 from '../../Assets/Machu-Picchu.jpg'
import img3 from '../../Assets/italy.jpg'
import img4 from '../../Assets/mtkenya.jpg'
import img2 from '../../Assets/wall.jpg'

//so now we are going to use a high order array method to display
//all the destination using Map. to do so we need to list all the destination
//in one array and later on call each destination by index

const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle:'Machu-Picchu',
    location:'Mexico',
    grade:'CULTURAL RELAX',
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'The Great Wall of China',
    location:'Peru',
    grade:'Moderate',
  }, {
    id:3,
    imgSrc:img3,
    destTitle:'Colosseum',
    location:'Italy',
    grade:'Easy',
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Mount Kenya',
    location:'kenya',
    grade:'Moderate',
  }

]

export const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From histrorical cities to natural spectacular,
               come see the best of the World!
            </p>
          </div>
          <div className="iconDiv flex">
              < BsArrowLeftShort  className='icons leftIcon'/>
              < BsArrowRightShort  className='icons'/>
          </div>
        </div>
        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
                <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="Image title"  />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}
                      </p>
                      <BsArrowRightShort  className='icons'/>
                  </div>
    
                </div>
                <div className="destFooter">
                  <div className="number">
                    0{id}
                  </div>
                  <div className="destText flex">
                    <h6>
                      {location}
                    </h6>
                    <span className='flex'>
                      <span className="dot">
                        <BsDot  className='icons'/>
                        Dot
    
                      </span>
                    </span>
                  </div>
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


export default Popular