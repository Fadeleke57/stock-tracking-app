'use client'

import Image from 'next/image'
import styles from './page.module.css'
import catLogo from './componets/images/cat_logo.svg'
import BackToTopBtn from './componets/backToTop'
import Navbar from './componets/navbar'
import Header from './componets/headerSection'
import Section1 from './componets/section1'
import Section2 from './componets/section2'
import Section3 from './componets/section3'
import Section4 from './componets/section4'
import Footer from './componets/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Navbar/>     
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>  
      <Footer/>
      <BackToTopBtn/>
      </div>
    </main>
  )
}
