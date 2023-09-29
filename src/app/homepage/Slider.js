import React from 'react';
import './Card2.css';
import dynamic from "next/dynamic";
import Link from 'next/link'

function Slider() {
  return (
    <div class="slider-container" >
    <div class="slide">
      
      <div class="text-card">
        <h2>AI Driven Research</h2>
        <p>Harness the power of artificial intelligence to gain valuable insights into market trends, historical data, and predictive analytics for informed investment decision-making.</p>
        <a href="https://builtin.com/artificial-intelligence/ai-trading-stock-market-tech" target="_blank">Learn More</a>
      </div>
      
    </div>

    <div class="slide">
    
      <div class="text-card">
        <h2>Relavent News Sources</h2>
        <p>Stay ahead of the game with personalized news sources that deliver relevant and timely information, keeping you informed about the latest developments impacting your investments.</p>
        <Link href="/news">See News</Link>
      </div>
      
    </div>
    <div class="slide">
      <div class="text-card">
        <h2>Acccess to Thousands of Stocks</h2>
        <p>Explore a vast universe of investment opportunities with our platform, providing you with access to more than eight thousand stocks from various markets and sectors.</p>
        <a href="/analysis" >Stock Analysis</a>
      </div>
    </div>

    <div class="slide">
      <div class="text-card">
        <h2>Sentiment Analysis</h2>
        <p>Utilize cutting-edge sentiment analysis techniques to gauge public opinion and market sentiment, providing you with a deeper understanding of investor behavior and potential market shifts.</p>
        <a href="https://www.bytesview.com/blog/sentiment-analysis-stock-market/#:~:text=In%20the%20context%20of%20the,prediction%20of%20stock%20price%20movements." target="_blank">Learn More</a>
      </div>
    </div>

</div>
  )
}

export default dynamic (() => Promise.resolve(Slider), {ssr: false})