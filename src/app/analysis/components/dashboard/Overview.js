'use client'

import './Overview.css'
import TDchart from './TDchart';
import TDHeatMap from './TDHeatMap'
import StockProfile from './StockProfile'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHandHoldingDollar, faMoneyBills, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import MarketData from './MarketData'

export default function Overview({stock, stockName}) {
  const APIavkey1 = "4N41C36BPOX8US8K";
  const APIavkey2 = "E6LWIGAE00L1A85V";
  const [exchange, setExchange] = useState("NASDAQ")
  const [profile, setProfile] = useState({})

  function formatMarketCap(marketCap) {
    if (marketCap >= 1e12) {
      return (Math.ceil(marketCap / 1e12 * 100) / 100).toFixed(2) + ' trillion';
    } else if (marketCap >= 1e9) {
      return (Math.ceil(marketCap / 1e9 * 100) / 100).toFixed(2) + ' billion';
    } else if (marketCap >= 1e6) {
      return (Math.ceil(marketCap / 1e6 * 100) / 100).toFixed(2) + ' million';
    } else if (marketCap >= 1e3) {
      return (Math.ceil(marketCap / 1e3 * 100) / 100).toFixed(2) + ' thousand';
    } else {
      return Math.ceil(marketCap).toFixed(2);
    }
  }

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=${APIavkey1}`)
    .then(res => res.json())
    .then(data => {
      if (data) {
        const profile = {
          sector: data.Sector,
          mCap: data.MarketCapitalization,
          beta: data.Beta,
          rps: data.RevenuePerShareTTM
        };
        setProfile(profile)
      }
    });
}, [stock]);

  const sector = profile.sector
  const mCap = profile.mCap
  const beta = profile.beta
  const rps = profile.rps

  return (
    <div>

      <h1 className="dashboard-title">Overview of <span className='stock-symbol'>{`${exchange}: ${stock}`}</span></h1>
      <div className="overview">

        <div className="panel">
          <div>
            <div className="icon">
              <FontAwesomeIcon icon={faPuzzlePiece}/>
            </div>
          </div>
          <div>
            <h2>{sector}</h2>
            <small>Sector</small>
          </div>
        </div>

        <div className="panel">
          <div>
            <div className="icon">
              <FontAwesomeIcon icon={faMoneyBills}/>
            </div>
          </div>
          <div>
            {mCap && <h2>{formatMarketCap(mCap)}</h2>}
            <small>Market Cap</small>
          </div>
        </div>

        <div className="panel">
          <div>
            <div className="icon">
            <FontAwesomeIcon icon={faBolt}/>
            </div>
          </div>
          <div>
            <h2>{beta}</h2>
            <small>Beta</small>
          </div>
        </div>

        <div className="panel">
          <div>
            <div className="icon">
              <FontAwesomeIcon icon={faHandHoldingDollar}/>
            </div>
          </div>
          <div>
            <h2>{rps}</h2>
            <small>Revenue per Share (TTM)</small>
          </div>
        </div>

      </div>

      <div className="user-info">

        <div className="profile-card panel">
          <StockProfile stock={stock} stockName={stockName} setExchange={setExchange}/>
        </div>
        
        <div className="chart-container">
          <TDchart stock={stock} exchange={exchange}/>
        </div>

      </div>

      <div className="gallery">
        <>
          <MarketData stock={stock}></MarketData>
        </>

        <div className='gallery-box'>
          <TDHeatMap/>
        </div>
        
      </div>

    </div>
  )
}

