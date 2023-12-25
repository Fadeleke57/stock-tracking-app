'use client'

import { useState, useEffect, useRef } from "react";
import "./range-slider.css";

export default function RangeSlider({ min, max, value, step, stock }) {
  const [sliderRange, setSliderRange] = useState(value);
  const sliderRef = useRef(null);

  function handleSliderInput() {
    //Get range between max & min values
    const range = max - min;
    //Get distance between value and min value
    const distance = sliderRef.current.value - min;
    //Turn into percentage
    const percentage = (distance / range) * 100;
    //Set slider range to percentage
    setSliderRange(percentage);
  }

  /*Run function when slider reference is set*/
  useEffect(() => {
    handleSliderInput();
  }, [stock, sliderRef, value]);

  return (
    <div className="sentiment-range-slider">

      <small style={{color: 'black'}}>Bearish</small>
      <div className="sentiment-slider-container">
        <input
          type="range"
          onInput={handleSliderInput}
          value={value}
          className="sentiment-slider"
          min={min}
          max={max}
          ref={sliderRef}
          step={step}
          disabled
        />
        <div
          className="sentiment-slider-thumb"
          style={{ left: `calc(${sliderRange}% - 0.5em)` }}
        ></div>
        <div
          className="sentiment-progress"
          style={{ width: `${sliderRange}%` }}
        ></div>
      </div>
      <small style={{color: 'black'}}>Bullish</small>
    </div>
  );
}

