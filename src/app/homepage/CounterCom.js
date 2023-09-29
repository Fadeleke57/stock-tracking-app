'use client'

import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

const CounterComponent = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById('counter');
      const counterPosition = counterElement.getBoundingClientRect();

      if (counterPosition.top < window.innerHeight && counterPosition.bottom >= 0) {
        // Element is in view, start counting
        startCounting();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const startCounting = () => {
    const countInterval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const nextNumber = prevNumber + 1;
        if (nextNumber >= targetNumber) {
          clearInterval(countInterval);
          return targetNumber;
        }
        return nextNumber;
      });
    }, 0.01);
  };

  return (
    <div className="counter-container">
      <h2 id="counter">{currentNumber + "+"}</h2>
    </div>
  );
};

export default dynamic (() => Promise.resolve(CounterComponent), {ssr: false})

