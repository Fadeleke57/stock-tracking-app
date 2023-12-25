'use client';
import { useState, useEffect } from 'react';
import './backToTop.css';


function BackToTopButton() {
  const [buttonState, setButtonState] = useState("hidden");

  // Scroll event listener to show/hide the button
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 150) {
        if (buttonState === "hide" || buttonState === "hidden") {
          setButtonState("visible");
        }
      } else {
        if (buttonState === "visible") {
          setButtonState("hide");
        } 
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [buttonState]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`back-to-top-button ${buttonState}`}
      onClick={scrollToTop}
    >
      Back To Top
    </button>
  );
}

export default BackToTopButton;