import './Card3.css';
import TradingViewWidget from './TDwidget';
import dynamic from "next/dynamic";
import FadeUp from './FadeUp';
import Image from 'next/image'
import img from './img/stockPrices.svg'

function Card3() {
  return (
    <section className="section3" style={{justifyContent: 'center'}} id="About">

<div className="header">

<div className="aux-container" >
  
  <div className="header-body" >

    <div className="header-text">

      <div>
      <FadeUp>
      <h1 className='title' style={{color:'white', maxWidth: 500 + 'px'}}>
      Driving Knowledge Driven Investments
      </h1>
      </FadeUp>
      <FadeUp>
        <p className='subtitle' style={{color:'white'}}>
        At Bonsai Finance, our mission is to empower individuals of diverse financial backgrounds with the tools and knowledge they need to make informed investment decisions. We provide a comprehensive platform powered by advanced technology with the aim to simplify the investment research process and enable users to explore the potential of the financial markets through a user-centric expereince.
        </p>
      </FadeUp>
        <div className="buttons">
        <FadeUp>
          <a href="#Features" className="btn btn-secondary" style={{color:'white'}}>
           Explore features
          </a>
        </FadeUp>
        </div>

      </div>

    </div>
    
    <div className="banner">
    <FadeUp>
    <TradingViewWidget></TradingViewWidget>
    </FadeUp>  
    </div>
    
  </div>

</div>  

</div>

    </section>
  )
}

export default dynamic (() => Promise.resolve(Card3), {ssr: false})