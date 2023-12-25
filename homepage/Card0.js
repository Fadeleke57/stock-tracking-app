import React from 'react';
import './Card0.css';
import dynamic from "next/dynamic";
import Link from 'next/link'
import FadeUp from './FadeUp';
import Image from 'next/image';
import img from './img/bonsaiSVG.svg';
import BonsaiGif from './img/bonsai_gif.gif'

function Card0() {

  return (
    <section id='card0'>

      <div className="row2">

        <div className="col" style={{flexBasis: 50 + "%"}}>

          <Link href="https://youtu.be/fCdXvp0tTnc" target="blank"><p className='videoText'><small>Restoration of a Chinese Juniper Bonsai</small></p></Link>
          <FadeUp>
            <Image src={BonsaiGif} className='video'></Image>
          </FadeUp>
        </div>

        <div className="col2">

          <div className="text">
          <FadeUp>
            <h1>
              Nurturing the Art of Financial Growth
            </h1>
          </FadeUp>
          <FadeUp>
            <p>
              Just as bonsai requires patience, care, and skillful nurturing to grow into magnificent creations, so do your investments. 
              At Bonsai Finance, we believe that investing is an art form that requires dedication, knowledge, and guidance. We offer valuable insights  to help you navigate the complexities of the financial landscape.
            </p>
          </FadeUp>
          <FadeUp>
            <a href="/analysis" className="btn btn-secondary">
              Try it out
            </a>
          </FadeUp>
          </div>

        </div>

      </div> 

    </section>
  );
}

export default dynamic (() => Promise.resolve(Card0), {ssr: false})