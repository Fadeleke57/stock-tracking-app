'use client'
import './section3.css'
import Image from 'next/image'
import HistoryGraphic from './images/history_section_svg.svg'
import catHiding from './images/cat_in_tree_resized.jpg'
import { Fade } from "react-awesome-reveal";

function Section3 () {
    return (
        <section className="card3" id="History">
            
        <div className="card3-content">
            <Fade triggerOnce direction='up' >
            <div className="card3-history-graphic-div-mobile">
                <Image className="card3-history-graphic-mobile" src={catHiding} alt='cat in tree'></Image>
            </div>
            </Fade>   

            <div className="card3-history">
                <Fade triggerOnce direction='up' >
                <div>
                    <small><i>About Cat Trail.</i></small><br/><br/> 
                </div>
                <h1>History</h1><br></br>
                <h2>Cat Trail is an investment company serving the Dekker family.</h2>
                <br></br>
                </Fade>

                <Fade triggerOnce direction='up' >
                <p>
                {/*MAKE SURE TO REPLACE APOSTROPHES WITH UNICODE VALUES FOR BUILD*/}
                Cat Trail was founded by David Dekker after Marcel Dekker, Inc. was acquired at the end of 2003. Marcel Dekker, Inc. (Dekker) was a scientific/technological/medical (STM) publishing company founded by David and Russell&#39;s father, Marcel Dekker, in 1964. Prior, Marcel worked in marketing and sales for the publishing firm, Interscience, which was founded by Marcel&#39;s father, Maurits Dekker, and Eric Proskauer in 1947. Interscience merged with John Wiley & Sons in 1963, becoming Wiley-Interscience.
                </p>
                <br/>
            
                <p>
                Like Interscience before it, Marcel Dekker, Inc. prospered, transforming into a mid-sized global STM publisher. In 1997, Marcel Dekker retained his Chairman title but vacated the Presidency, passing the company&#39;s leadership to his two sons, Russell Dekker as Chief Publishing Officer and David Dekker as Chief Operating Officer.
                </p>
                <br/>
             
                <p>
                At the time, technology and the internet were posing both opportunities and challenges for traditional publishers. With new leadership, the company embraced the digital challenges by building a strong web presence, a new brand image, pioneering in-house content management, and directly publishing material in real-time to the web and syndication partners. Crossroads Media, a separate company owned by David and Russell Dekker, also purchased Achorn Graphics (Achorn) in 1998, a typesetter which had developed a unique technology to render STM content on the web. Achorn became well-regarded doing all production work for Dekker as well as for other STM publishers such as Elsevier, Kluwer, Springer, Wiley, and McGraw-Hill. Achorn was sold in 2001 to SPI Graphics, a company financed by Tommy Lee Partners.
                </p>
                <br/>
               
                <p>
                In 2003, Dekker&#39;s Board of Directors agreed to sell Dekker to the Taylor & Francis Group, plc (T&F). Dekker&#39;s American base and digital activism made it an especially good fit with the more English and print-centric T&F. Russell and David worked for T&F, honoring their required employment contracts, but left soon after to establish new ventures. Now well-established and with better resources, Cat Trail has become a full-service investment boutique for the Dekker family.
                </p>
                </Fade>
            </div>
            
            
            <div className="card3-history-graphic-div">
                <Image className="card3-history-graphic" src={HistoryGraphic} alt='cat in tree'></Image>
            </div>
            
        </div>
        </section>
    )
}

export default Section3;