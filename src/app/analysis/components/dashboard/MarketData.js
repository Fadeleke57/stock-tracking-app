
'use client'
import {useEffect, useState} from 'react'

export default function MarketData({stock}) {
  const [quoteOverview, setQuoteOverview] = useState([]);

  const APIavkey2 = "E6LWIGAE00L1A85V";

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=${APIavkey2}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const quoteOverview = {
            latestQuarter: data.LatestQuarter,
            EPSdata: data.EPS,
            dividendPerShare: data.DividendPerShare,
            targetPrice: data.AnalystTargetPrice,
            trailingPE: data.TrailingPE,
            revenueTTM: data.RevenueTTM,
            quarterlyEarningsGrowth: data.QuarterlyEarningsGrowthYOY,
            forwardPE: data.ForwardPE,
            grossProfitTTM: data.GrossProfitTTM,
            profitMargin: data.ProfitMargin, 
            dividendYield: data.DividendYield,
            EBITDAdata: data.EBITDA
          };
          setQuoteOverview(quoteOverview)
        }
      })
      .catch((error) => {
        console.error("Error fetching quote data:", error);
        // 
      });
  }, [stock]);



  return (
    <div className="market-data">

      <div className="market-data-header">
        <h2><span className="stock-symbol">{stock}</span> Financials</h2>
      </div>

      <div className="market-data-stats">

      <div>
        <small>Latest Quarter</small>
        <h5>{quoteOverview.latestQuarter}</h5>
      </div>

      <div>
        <small>EPS</small>
        <h5>{quoteOverview.EPSdata}</h5>
      </div>

      <div>
        <small>Dividend Per...</small>
        <h5>{quoteOverview.dividendPerShare}</h5>
      </div>

      <div>
        <small>Dividend Yield</small>
        <h5>{quoteOverview.dividendYield + '%'}</h5>
      </div>

      <div>
        <small>Trailing PE</small>
        <h5>{quoteOverview.trailingPE}</h5>
      </div>

      <div>
        <small>Forward PE</small>
        <h5>{quoteOverview.forwardPE}</h5>
      </div>

      <div>
        <small>Quarterly Ear...</small>
        <h5>{quoteOverview.quarterlyEarningsGrowth}</h5>
      </div>

      <div>
        <small>Revenue(TTM)</small>
        <h5>{quoteOverview.revenueTTM}</h5>
      </div>

      <div>
        <small>Gross Profit</small>
        <h5>{quoteOverview.grossProfitTTM}</h5>
      </div>

      <div>
        <small>Profit Margin</small>
        <h5>{quoteOverview.profitMargin}</h5>
      </div>

      <div>
        <small>EBITDA</small>
        <h5>{quoteOverview.EBITDAdata}</h5>
      </div>

      <div>
        <small>Target Price</small>
        <h5>{quoteOverview.targetPrice}</h5>
      </div>

      </div>
    </div>
  )
}
