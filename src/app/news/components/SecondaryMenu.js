import Link from 'next/link';
import dynamic from "next/dynamic";
import './SecondaryNavbar'
import styles from './SecondaryNavbar.module.css'

function Menu({menuOpen}) {
    return (
      <ul className={menuOpen ? styles.menuOpen : styles.menu }>
          <li key={0}>
            <Link href='../'>Home</Link>
          </li>
          <li key={1}>
            <Link href='/news'>News</Link>
          </li>
          <li key={2}>
            <Link href='/analysis'>Stock Analysis</Link>
          </li>
      </ul>
    )
  }
  
  export default dynamic (() => Promise.resolve(Menu), {ssr: false})