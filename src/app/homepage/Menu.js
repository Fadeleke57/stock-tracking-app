import Button from './Button';
import Link from 'next/link';
import dynamic from "next/dynamic";
import styles from './Navbar.module.css'

function Menu({ menuOpen, setMenuOpen }) {
  function handleClick() {
    setMenuOpen(false)
  }

  const linkNames = [
    'News',
    'About',
    'Features',
    'Stocks'
  ];

  return (
    <ul className={menuOpen ? styles.menuOpen : styles.menu}>
      {linkNames.map((linkName, index) => (

        <li key={index}>

          {linkName === 'News' ? 

          (<Link 
            href={`/news`} 
            onClick={() => handleClick()}>
              {linkName}
          </Link>)

             : 
             
          (linkName === 'Stocks' ? 
          
          (<Link 
           href={`/analysis`} 
           onClick={() => handleClick()}>
            {linkName}
          </Link>)
          
           : 
           
          
          (<Link 
            href={`#${linkName}`} 
            onClick={() => handleClick()}>
            {linkName}
          </Link>)
          
        )}

        </li>
        
      ))}
    </ul>
  );
}

export default dynamic(() => Promise.resolve(Menu), { ssr: false });