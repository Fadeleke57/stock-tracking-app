import './styles/global.css';
import Navbar from './homepage/Navbar';
import Header from './homepage/Header';
import Card0 from './homepage/Card0';
import Card1 from './homepage/Card1';
import Card2 from './homepage/Card2';
import Card3 from './homepage/Card3';
import Footer from './homepage/Footer';
import dynamic from "next/dynamic";

 function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <main>
      <Card0/>
      <Card1/>
      <Card3/>      
      <Card2/>
      </main>
    </div>
    </>

  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: true})
