
'use client'

import './NewsSection.css'
import Link from 'next/link'
import NewsSlide from './NewsSlide';
import {useState, useEffect} from 'react';

export default function NewsSection({stock, setLimit, limit}) {
  const [items, setItems] = useState([])
  const APIavkey1 = "4N41C36BPOX8US8K";

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${stock}&sort=RELEVANCE&time_from=20230821T0130&limit=50&apikey=${APIavkey1}`)
      .then(res => res.json())
      .then(data => {
        // Use slice to limit the items to the first 3
        if (data.feed) {
          const limitedItems = data.feed.slice(0, limit);
          setItems(limitedItems);
        }
      });
  }, [stock, limit]);

  function handleMoreClick() {
    setLimit(limit + 3);
  }

  return (
    <div className="activities" style={{position: 'relative'}}>

        <div className="activities-header">
          <h2>News Flow</h2>
          <Link href="/news">See all</Link>
        </div>

        <div className='news-slide'>
        <NewsSlide items={items} stock={stock}/>
        </div>

        <div>
          <button className="more-button" onClick={handleMoreClick}>More</button>
        </div>

      </div>
  )
}

