'use client'

import './Card2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';
import dynamic from "next/dynamic";
import FadeUp from './FadeUp';


function Card2() {

  return (
    <>
    <div className='card2' style={{backgroundColor : 'white'}} id="Features">

    <div>
    <FadeUp>
      <h1>
      <FontAwesomeIcon icon={faSeedling} />
      <br/>
      Hone Your Craft
      </h1>
    </FadeUp>  
    <FadeUp>
      <p>Experience Shouldn&apos;t Limit Your Success</p>
    </FadeUp>
    </div>

  <FadeUp>
    <section className='slider-section'>
    <Slider/>
    </section>
  </FadeUp>
    </div> 

   </> 
  )
}

export default dynamic (() => Promise.resolve(Card2), {ssr: false})