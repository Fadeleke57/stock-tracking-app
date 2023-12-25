'use client'

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'

export default function StockProfile({ stock, stockName, setExchange }) {
  const API12key1 = "1a527701464c4656a976b9d0786c8d79";
  const API12key2 = "d672c2cc4cc1495b9d9205a0ef887ca3";
  const API12key3 = "27494420364d452585bd44350ca7e364";
  const API12key4 = "c27cdecdac394473b39748bbf56d07a0";

  // Function to limit the stockName to 30 characters.
  if (stockName) {
    var limitedStockName = stockName.slice(0, 30);
  }
  if (stockName && stockName.length > 30 ) {
    limitedStockName += '...';
  }           

  const [logo, setLogo] = useState('https://api.twelvedata.com/logo/apple.com');
  const [quoteOverview, setQuoteOverview] = useState([]);
  const [isValidLogo, setIsValidLogo] = useState(true); // Initially set to true
  const [realTimePrice, setRealTimePrice] = useState("---"); 

  useEffect(() => {
    setIsValidLogo(true);
    fetch(`https://api.twelvedata.com/logo?symbol=${stock}&apikey=${API12key3}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.url && data.url.length > 0) {
          setLogo(data.url);
        } else {
          setIsValidLogo(false); // Set to false if the URL is not valid
        }
      });
  }, [stock]);

  useEffect(() => {
    fetch(`https://api.twelvedata.com/quote?symbol=${stock}&apikey=${API12key4}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const quoteOverview = {
            exchange: data.exchange,
            open: data.open,
            marketOpen: data.is_market_open,
            closePrice: data.close,
            prevClose: data.previous_close,
            volume: data.volume,
            change: data.change,
            percentChange: data.percent_change,
            f2weekLow: data.fifty_two_week?.low, // optional chaining
            f2weekHigh: data.fifty_two_week?.high, // optional chaining
            dayLow: data.low,
            dayHigh: data.high,
            currency: data.currency,
            avgVolume: data.average_volume
          };
          setQuoteOverview(quoteOverview);
          setExchange(quoteOverview.exchange);
        }
      })
      .catch((error) => {
        console.error("Error fetching quote data:", error);
        // 
      });
  }, [stock]);

  useEffect(() => {
    fetch(`https://api.twelvedata.com/price?symbol=${stock}&dp=2&apikey=${API12key2}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const overview = {
            realTimePrice: data.price,
          };
          setRealTimePrice(overview.realTimePrice); // Set the real-time price here
        }
      });
  }, [stock]);

  
  const exchange = quoteOverview.exchange;

  var open = Math.round(parseFloat(quoteOverview.open) * 100.0) / 100.0;
  open = Number(open).toFixed(2);

  const isMarketOpen = quoteOverview.marketOpen;

  var close = Math.round(parseFloat(quoteOverview.closePrice) * 100.0) / 100.0;
  close = Number(close).toFixed(2);

  var prevClose = Math.round(parseFloat(quoteOverview.prevClose) * 100.0) / 100.0;
  prevClose = Number(prevClose).toFixed(2);

  const volume = quoteOverview.volume

  var change = Math.round(parseFloat(quoteOverview.change) * 100.0) / 100.0;
  change = Number(change).toFixed(2);

  var percentChange = Math.round(parseFloat(quoteOverview.percentChange) * 100.0) / 100.0;
  percentChange = Number(percentChange).toFixed(2);

  var f2WeekLow = Math.round(parseFloat(quoteOverview.f2weekLow) * 100.0) / 100.0;
  f2WeekLow = Number(f2WeekLow).toFixed(2);

  var f2WeekHigh = Math.round(parseFloat(quoteOverview.f2weekHigh) * 100.0) / 100.0;
  f2WeekHigh = Number(f2WeekHigh).toFixed(2);

  var dayLow = Math.round(parseFloat(quoteOverview.dayLow) * 100.0) / 100.0;
  dayLow = Number(dayLow).toFixed(2);

  var dayHigh = Math.round(parseFloat(quoteOverview.dayHigh) * 100.0) / 100.0;
  dayHigh = Number(dayHigh).toFixed(2);

  const currency = quoteOverview.currency;
  const avgVolume = quoteOverview.avgVolume;

  var price = isMarketOpen ? realTimePrice : close;
  price = Number(price).toFixed(2)


  return (
    <>
      <div className="profile-stats">
        <h2><FontAwesomeIcon icon={isMarketOpen ? faSun : faMoon} className='market-status-icon'/></h2>
        <div className='profile-header'>

          <div>
            
            {isValidLogo && <img src={logo} alt={limitedStockName} />}
            <h3>{limitedStockName}</h3>
            <small>{`${stock} - ${exchange}`}</small>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h2>{price}<span style={{fontSize: .32 + 'em'}}>{currency}</span></h2>
            <h5 className={`${change > 0 ? 'ticker-positive': 'ticker-negative'}`}>{change > 0 ? `+${change} +${percentChange}%  \u25B2` : `${change} ${percentChange}%  \u25BC`}</h5>
          </div>

        </div>

        <div>
          <h4>{open}</h4>
          <small>Open</small>
        </div>

        <div style={{ textAlign: 'right' }}>
          <h4>{isMarketOpen ? prevClose : close}</h4>
          <small>Close</small>
        </div>

        <div>
          <h4>{volume}</h4>
          <small>Volume</small>
        </div>

        <div style={{ textAlign: 'right' }}>
          <h4>{`${dayLow}-${dayHigh}`}</h4>
          <small>Day Range</small>
        </div>

        <div >
          <h4>{avgVolume}</h4>
          <small>Average Volume</small>
        </div>

        <div style={{ textAlign: 'right' }}>
          <h4>{`${f2WeekLow}-${f2WeekHigh}`}</h4>
          <small>52 Week Range</small>
        </div>

      </div>

    </>
  );
}

