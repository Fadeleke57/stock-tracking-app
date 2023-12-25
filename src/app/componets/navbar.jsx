'use client'

import React, { useState, useEffect } from 'react';
import Menu from './navbar-menu';
import './Navbar.css';
import Link from 'next/link';
import Image from 'next/image'
import CatLogo from './images/cat_logo.svg'
import NavbarMenuBtn from './navbar-menu-btn';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
        <Link href="#" className="brand">
          <Image className='navbar-img' src={CatLogo} alt='logo' priority></Image>
        </Link>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setIsActive={setIsActive}/>
        <div className="menu-btn">
          <NavbarMenuBtn 
            onClick={menuToggle} 
            isActive={isActive}
            setIsActive={setIsActive}
            />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;