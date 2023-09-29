'use client'

import  { useState, useEffect } from 'react'
import SecondaryNavbar from '../news/components/SecondaryNavbar'
import dynamic from 'next/dynamic'
import './analysis.css'
import '../styles/global.css'
import FadeUp from '../homepage/FadeUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { SearchBar } from "./components/searchBar/searchBar";
import { SearchResultsList } from "./components/searchBar/searchResultsList";
import Dashboard from './components/dashboard/Dashboard'

function AnalysisPage() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [stock, setStock] = useState("AAPL");
  const [stockName, setStockName] = useState("Apple Inc");
  const [visible, setVisible] = useState(true);
  const [limit, setLimit] = useState(3)
  

  function handleClick() {
    setVisible(false);
  }

  return (
    <div className="analysis" onClick={handleClick}>
      <SecondaryNavbar/>
      <div className='analysis-header'>
      <h1 className='analysis-title'><FontAwesomeIcon icon={faArrowTrendUp} /><br></br>Stock <span className='stock-symbol'>Analysis</span></h1>
      <p className='analysis-subtitle'>Real time data is available on stock profile (chart prices delayed by 15 minutes)</p>
      <p></p>

      <div className="search-bar-container">
        
        <SearchBar 
          setResults={setResults} 
          setInput={setInput} 
          input={input} 
          setStock={setStock} 
          visible={visible} 
          setVisible={setVisible} 
          setStockName={setStockName}
          setLimit={setLimit}/>

        {results && results.length > 0 && 
        <SearchResultsList 
          results={results} 
          setStock={setStock} 
          setStockName={setStockName} 
          setInput={setInput} 
          setResults={setResults} 
          setVisible={setVisible} 
          visible={visible}
          setLimit={setLimit}
        />}
        
      </div>
      </div>

      <Dashboard 
        stock={stock} 
        stockName={stockName}
        setLimit={setLimit}
        limit={limit}
      />
      
    </div>
  )
}

export default dynamic (() => Promise.resolve(AnalysisPage), {ssr: true})