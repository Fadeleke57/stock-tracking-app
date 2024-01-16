
import React from 'react';
import './Header.css';
import Marquee from './Marquee'
import dynamic from "next/dynamic";
import FadeUp from './FadeUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import './Button.css'

function Header() {
  const coolGreen = "#486850";
  return (

    <header>

    <div className="row" style={{maxWidth: '1300px'}}>
      
      <div className="col">
        <FadeUp>
        <div className="waviy">
          <h1>CULTIVATE </h1>
        </div>
      </FadeUp>
      </div>

      <div className="col" style={{marginTop: -40 + 'px'}}>
      <FadeUp>
        <div className="gradient" style={{marginLeft: '-6px'}}>
          <span>G</span>
          <span>R</span>
          <span>O</span>
          <span>W</span>
          <span>T</span>
          <span>H</span>
        </div>
      </FadeUp>
      </div>

      
      <div className="col" style={{ maxWidth: 500 + 'px' }}>
      <FadeUp>
        <h1 className='header-subtitle'><span>Balance</span> and <span>patience</span> are key to any investment.</h1>
      </FadeUp>  
      </div>
      

      
      <div className="col">
        <FadeUp>
        <a href="#card1" className="btn btn-secondary" style={{ marginRight: 2 + 'em' }}>
          Explore
        </a>
        <Link href='/analysis' className='btn btn-secondary'>
          Stocks
        </Link>
        </FadeUp>
      </div>

      <div className='col' style={{paddingTop: 2 + 'em'}}>
        <a href='#card0'><h1><FontAwesomeIcon icon={faAngleDown} bounce className='header-arrows' /></h1></a>
      </div>
      
    </div>
  </header>
  )
}

export default dynamic (() => Promise.resolve(Header), {ssr: false})