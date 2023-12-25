'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './section4.css'
import LinkedInIcon from './images/linkedIn.svg'
import Image from 'next/image'
import Form from './form'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"


function Section4 () {
    return (
        <section className="card4" id="Contact">
        
            <div className="card4-contact-div">

                <div className="card4-contact-inputs">
                    <h1>Contact Us</h1>
                    <Form></Form>
                </div>

                <div className="card4-contact-information">
                <div>
                    <h1>Cat Trail Office</h1>
                    <p>admin@cattrail.com</p>
                    <br/>
                    <h1>The Dekker Foundation</h1>
                    <p>admin@dekker.org</p>
                    <br/>
                    <h3></h3>
                    <h3>Mailing Address<FontAwesomeIcon icon={faEnvelope} className="contact-icon" /></h3>
                    <p>
                    CAT TRAIL <br></br>606 Post Road East Suite 681  <br></br>WESTPORT, CT 06880
                    </p>
                    <br/>
                    <h3>Phone<FontAwesomeIcon icon={faPhone} className="contact-icon"/></h3>
                    <p>
                    (203) 226-3152 <br></br>
                    (212) 207-3714 
                    </p>
                </div>   
                </div>

                <a href={'https://www.linkedin.com/company/cattrail-capital-llc/'} target="blank"><Image src={LinkedInIcon} className="linkedIn-icon" alt='linkedin'></Image></a>

            </div>
        </section>
    )
}

export default Section4