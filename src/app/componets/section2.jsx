'use client'

import './section2.css'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import DavidDekker from './images/david.jpg'
import RussellDekker from './images/russell.jpg'
import AndrewBudinoff from './images/andrew.jpg'
import Button from './buttons'
import { Fade } from "react-awesome-reveal";
import LinkedInIcon from './images/linkedIn.svg'
import Link from 'next/link'

function Section2() {
    const [activeItem, setActiveItem] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {

          const shouldBeMobile = window.innerWidth <= 700;
          setIsMobile(shouldBeMobile);

      };

      // Set the initial value based on the client's window size
      handleResize();

      // Debounce resize function
      const debouncedResize = debounce(handleResize, 100);

      window.addEventListener('resize', debouncedResize);

      return () => {
          window.removeEventListener('resize', debouncedResize);
      };
    }, []);

    {/*MAKE SURE TO REPLACE APOSTROPHES WITH UNICODE VALUES FOR BUILD*/}
    const accordionItems = [
      {
        imgSrc: DavidDekker,
        alt: 'David Dekker',
        title: 'David Dekker',
        subtitle: 'MANAGING PARTNER', 
        description: 'David Dekker serves as Managing Partner of Cat Trail, which he founded in 2004. \n \n David has served on numerous boards of private companies and currently serves on the advisory committees of Freedom 3, a private credit solutions fund (www.freedom3.com), Alta Community Investments, a real estate development fund (www.acifund.com), and Cornerstone, a construction company headquartered in Big Sky, MT (www.cmsbigsky.com). David is the founding Trustee of the Dekker Foundation (www.dekker.org).  David also currently serves as President of Vineyard Golf Club in Martha&#39;s Vineyard, MA. \n \n David received a BS degree in Management Science from the University of Rhode Island and is a member of the Edward&#39;s Society, an alumni advisory board to the University President. David also received a Master of Business Administration degree from the Executive Management Program at Pace University&#39;s Lubin School of Business. Postgraduate work included the Executive Education Program “Mergers and Acquisitions” at Columbia University&#39;s Graduate School of Business. \n \n Additional background information can be found on the history page.',
        linkedin: 'https://www.linkedin.com/in/david-dekker-b18b246/',
      },
      {
        imgSrc: RussellDekker,
        alt: 'Russell Dekker',
        title: 'Russell Dekker',
        subtitle: 'PARTNER',
        description: 'Russell Dekker is a Partner of Cat Trail and serves on Cat Trail&#39;s investment committee. \n \n From 1990 through 2004, Russell served as Chief Publishing Officer of Marcel Dekker, Inc. From 2004 through 2009, he was the Founder and Managing Director of Summit Communications, LLC. Russell is a Trustee of the Dekker Foundation (www.dekker.org). \n \n Russell received a BA degree cum laude with high honors from Hobart College in 1990 and an MA degree from New York University in 1994. \n \n Additional background information can be found on the history page.',
        linkedin: 'https://www.linkedin.com/in/russell-dekker-5604a77/',
      },
      {
        imgSrc: AndrewBudinoff,
        alt: 'Andrew Budinoff',
        title: 'Andrew Budinoff',
        subtitle: 'DIRECTOR',
        description: 'Andrew Budinoff is Director of Portfolio Management and Trading at Cat Trail. Andrew is responsible for development and execution of Cat Trail&#39;s various internally managed trading strategies. Andrew is also responsible for developing and managing the firm&#39;s asset allocation model as well as portfolio risk and performance analytics. \n \n Prior to joining Cat Trail, Andrew was an analyst at Point Clear Capital Management (PCCM). Prior to joining PCCM, Andrew completed internships with UBS&#39;s private bank and JP Morgan.\n \n Andrew received a Bachelor of Science Degree from Boston College&#39;s Carroll School of Management. He also earned an MBA from NYU&#39;s Stern School of Business specializing in Quantitative Finance and Financial Instruments & Markets. Andrew is a CFA® charterholder.',
        linkedin: 'https://www.linkedin.com/in/andrew-budinoff-8b541213/',
      },
    ];

    // Debounce function to limit the rate of function execution
    function debounce(func, delay) {
      let timer;
      return function(...args) {
          clearTimeout(timer);
          timer = setTimeout(() => {
              func.apply(this, args);
          }, delay);
      };
    }

    function handleClick(url) {
      window.open(url, '_blank');
    }
  
    const handleItemClick = (index) => {
      event.preventDefault();
      setActiveItem(index);
    };

    function handleItemClick0 () {
      event.preventDefault();
      setActiveItem(0);
    }

    function handleItemClick1 () {
      event.preventDefault();
      setActiveItem(1);
    }

    function handleItemClick2 () {
      event.preventDefault();
      setActiveItem(2);
    }
  
    return (
      <section className="card2" id="Team">
        
        <div className='card2-header'>
            <Fade cascade direction='up' triggerOnce>
            <div className='card2-header-content'>
            <h1>Who We Are</h1> 
            {isMobile ? <div/>: <br></br> }
            <h3>Our Team</h3>
            <div className='card2-header-buttons'>
              <Button value="David Dekker" type="btn-quaternary" onClick={handleItemClick0}></Button>
    
              <Button value="Russell Dekker" type="btn-quaternary" onClick={handleItemClick1}></Button>
          
              <Button value="Andrew Budinoff" type="btn-quaternary" onClick={handleItemClick2}></Button>
            </div>
            </div>
            </Fade>
        </div>


        <Fade direction='up' triggerOnce>
        <div className="accordion">
            {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${index === activeItem ? 'item-active' : ''}`}
              onClick={() => handleItemClick(index)}
              >
              <Image className='accordion-item-pfp' src={item.imgSrc} alt={item.alt} />

              <div className='accordion-item-title'>
                <button onClick={() => handleClick(item.linkedin)} className='accordion-linkedin-button'><Image src={LinkedInIcon} className="accordion-linkedIn-icon" alt='linkedin'></Image></button>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3> 
              </div>

                <div className='accordion-item-information'>
                  <p dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br/>') }} />
                </div>
            </div>
          ))}
        </div>
        </Fade>
      </section>
    );
  }
  
  export default Section2;