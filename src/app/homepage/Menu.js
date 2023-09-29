import Button from './Button';
import Link from 'next/link';
import dynamic from "next/dynamic";

function Menu({menuOpen}) {
    const linkNames = [
      'Home',
      'About',
      'Features',
      <Button>Start</Button>
    ]
  
    return (
      <ul className={`menu ${menuOpen && 'menu-open'}`}>
          <li key={2}>
            <Link href='#Features'>Features</Link>
          </li>
          <li key={3}>
            <Link href='/news'>News</Link>
          </li>
          <li key={4}>
            <Link href='/analysis'>Analysis</Link>
          </li>
      </ul>
    )
  }
  
  export default dynamic (() => Promise.resolve(Menu), {ssr: false})