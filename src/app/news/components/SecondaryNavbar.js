'use client'

import React, { useState, useEffect } from 'react';
import SecondaryMenu from './SecondaryMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faTimes, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './SecondaryNavbar.module.css'
import Link from 'next/link';
import dynamic from "next/dynamic";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link href='../' className={styles.brand}>
          Bonsai Finance
          <FontAwesomeIcon icon={faHome} style={{marginLeft: 15 + 'px'}}/>
        </Link>
        <SecondaryMenu menuOpen={menuOpen}/>
        <div className={styles.menuBtn}>
          <FontAwesomeIcon icon={menuOpen ? faTimes: faBarsStaggered} onClick={menuToggle} />
        </div>
        
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})