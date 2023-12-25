'use client'

import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'
import dynamic from 'next/dynamic'
import './News.css'
import '../styles/global.css'
import FadeUp from '../homepage/FadeUp'
import SecondaryNavbar from './components/SecondaryNavbar'
import Marquee from '../homepage/Marquee'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

function NewsPage() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [topic, setTopic] = useState("financial_markets")

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=${topic}&sort=LATEST&time_from=20230720T0130&limit=72&apikey=4N41C36BPOX8US8K`)
    .then(res => res.json())
    .then(data => setItems(data.feed))
  }, [topic]) 

  return (
    <div className="News">
      <SecondaryNavbar/>
      <Marquee></Marquee>
      <FadeUp>
      <h1 className="news-title"><FontAwesomeIcon icon={faNewspaper} /><br></br>See The <span className='stock-symbol'>Latest News</span></h1>
      </FadeUp>
      <p className="news-subtitle">All news is refreshed hourly and subject to API limitiations</p>

      <Menu 
        active={active} 
        setActive={setActive} 
        setTopic={setTopic}
      />

      <NewsGrid 
        items={items}
      />
      
    </div>
  )
}

export default dynamic (() => Promise.resolve(NewsPage), {ssr: true})

