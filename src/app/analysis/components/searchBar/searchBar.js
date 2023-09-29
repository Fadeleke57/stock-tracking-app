'use client'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './searchBar.css'

export const SearchBar = ({ setResults,input,setInput, setStock, visible, setVisible, setStockName,setLimit }) => {
  const API12key1 = "1a527701464c4656a976b9d0786c8d79"
  const API12key2 = "d672c2cc4cc1495b9d9205a0ef887ca3" 
  const API12key3 = "27494420364d452585bd44350ca7e364"
  const API12key4 = "c27cdecdac394473b39748bbf56d07a0"

    const fetchData = (value) => {
      fetch(`https://ticker-2e1ica8b9.now.sh/keyword/${value}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const results = data.map((result) => ({
              symbol: result.symbol,
              name: result.name,
            }));
            setResults(results);
        }
      });
    };  
    {/*event functions*/}
    const handleChange = (value) => {
      if (value == "") {
        setInput("");
        setVisible(false)
        return;
      }
      else {
        setVisible(true);
        setInput(value);
        fetchData(value);
      }
    }
    {/*event functions*/}
    function handleClick() {
      if (input === "") {
        return;
      }
      setStock(input.toUpperCase());
      fetchStockName(input.toUpperCase()); // Fetch stock name here
      setVisible(!visible);
      setInput("");
      setLimit(3);
    }
    const fetchStockName = (stock) => {
      fetch(`https://api.twelvedata.com/quote?symbol=${stock}&apikey=${API12key4}`)
        .then(res => res.json())
        .then(data => {
          setStockName(data.name);
        });
    }
    {/*event functions*/}
    function handleInputClick() {
      setVisible(false)
    }
    {/*event functions*/}
    function handleKeyPress(event) {
      if (input === "") {
        return;
      }
      else if (event.key === 'Enter') {
        setStock(input.toUpperCase());
        fetchStockName(input.toUpperCase());
        setVisible(!visible)
        setInput("");
        setLimit(3);
      }
    }

    return (
      <>
      <div className="input-wrapper">
        <input
          placeholder=" i.e 'AAPL' or 'aapl'..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onClick={handleInputClick}
          onKeyPress = {handleKeyPress}
        />
        <button id="search-icon" type="submit" onClick={handleClick}><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      </>
    );
  }