import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from "next/dynamic";
import Link from 'next/link'


function Footer() {
  return (
    <footer className="footer4">
    <div className="container">
      <Link href="../" className="footer-brand">Bonsai Finance</Link>

      <ul className="footer-menu">
        <li>
          <Link href="../" key="../">Home</Link>
        </li>
        <li>
          <Link href="/news" key="/news">News</Link>
        </li>
        <li>
          <Link href="/analysis" key="/analysis">Analysis</Link>
        </li>
        <li>
          <Link href="../#About" key="/#About">About</Link>
        </li>
        <li>
          <Link href="../#Features" key="../#Features">Features</Link>
        </li>

      </ul>

      <p>
      Cultivating Your Wealth with Alpha Vantage API. Stock information at your fingertips, subject to API limitations. If data is not displaying, wait a minute before searching for a stock or viewing news.
      </p>
    </div>
    <div className='footer-bottom'>
      <p>Bonsai Finance © 2023. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})