'use client'

import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Link from 'next/link';
import dynamic from "next/dynamic";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [nav, setNav] = useState(false)

  useEffect(() => {
    function activateNav() {
      let scrollPosition = window.pageYOffset
      if(scrollPosition > 200) {
        setNav(true)
      } else if (scrollPosition < 10) {
        setNav(false)
      }
    }
    window.addEventListener("scroll", activateNav)
  })

  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`navbar ${nav && 'navbar-active'}`}>
      <div className="container">
        <Link href="/homepage" className="brand">
          Bonsai Finance
        </Link>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="menu-btn">
          <FontAwesomeIcon icon={menuOpen ? faTimes: faBarsStaggered} onClick={menuToggle} />
        </div>
        
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})