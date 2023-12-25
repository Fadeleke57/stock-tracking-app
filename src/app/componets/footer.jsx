'use client'
import './footer.css';
import Image from 'next/image';
import CatLogo from './images/cat_logo.svg';
import LinkedIn from './images/linkedIn.svg';
import LinkedInWhite from './images/linkedIn_white.svg'
import CatLogoWhite from './images/cat_logo_white.svg'

function Footer () {
    return (
        <footer className="footer4">
        <div className="container">
          <a href="#" className="footer-brand"><Image src={CatLogoWhite} alt='logo'></Image></a>
          <p>For inquiries or information, contact us above.</p>
          <ul className="footer-menu">
            <li>
              <a href="#About" key="1">What We Do</a>
            </li>
            <li>
              <a href="#Team" key="2">Who We Are</a>
            </li>
            <li>
              <a href="#History" key="3">History</a>
            </li>
            <li>
              <a href="#Contact" key="4">Contact</a>
            </li>
          </ul>
    
          <a href={'https://www.linkedin.com/company/cattrail-capital-llc/'} target='blank'><Image src={LinkedInWhite} className='linkedIn-footer' alt='linkedin'></Image></a>
        </div>
        <div className='footer-bottom'>
          <p>copyright © 2018 CATTRAIL all rights reserved.</p>
        </div>
      </footer>
    )
}

export default Footer;