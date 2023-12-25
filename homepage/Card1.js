
import React from 'react';
import './Card1.css';
import Image from 'next/image';
import img from './img/stockPrices.svg';
import CounterComponent from './CounterCom';
import Marquee from './Marquee';
import dynamic from "next/dynamic";
import FadeUp from './FadeUp';

function Card1() {
  return (
    <section style={{backgroundColor: 'white', justifyContent: 'center', overflow: 'hidden'}} id="card1" >

    <div className="header">

      <div className="aux-container" >
        
        <div className="header-body" >

          <div className="header-text">

            <div>
            <FadeUp>
              <h1 className="title">
                Ignite Your Ability to Learn and Absorb
              </h1>
            </FadeUp>
            <FadeUp>
              <p className='subtitle'>
                Investing is an art. Let Bonsai Finance be your trusted companion on this artistic journey.
              </p>
            </FadeUp>
              <div className="buttons">
              <FadeUp>
                <a href="/analysis" className="inner-btn inner-btn-primary" style={{color: 'white'}}>
                  Start today
                </a>
                <a href="#About" className="inner-btn inner-btn-secondary">
                  More about us
                </a>
              </FadeUp>
              </div>
              
              <div className="stats">
                <FadeUp>
                <div>
                  <CounterComponent targetNumber={1200}></CounterComponent>
                  <p>Stocks Accessible</p>
                </div>
                </FadeUp>
                <div className="line"></div>
                <FadeUp>
                <div>
                  <CounterComponent targetNumber={600}></CounterComponent>
                  <p>Users-To-Date</p>
                </div>
                </FadeUp>
              </div>

            </div>

          </div>
          
          <div className="banner">
          <FadeUp>
            <Image src={img} alt="banner"/>
          </FadeUp>  
          </div>
          
        </div>

      </div>  

    </div>

  </section>
  )
}

export default dynamic (() => Promise.resolve(Card1), {ssr: false})