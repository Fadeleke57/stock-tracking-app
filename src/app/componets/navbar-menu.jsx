import Button from './buttons';
import Link from 'next/link';
import Image from 'next/image';
import CattrailLogo from './images/cattrail_green.svg'

function Menu({ menuOpen, setMenuOpen, setIsActive }) {

  function handleClick() {
    setMenuOpen(false);
    setIsActive(false);
  }
 
  const linkNames = [
    <Image src={CattrailLogo} className='menu-logo' alt='logo'></Image>,
    'What We Do',
    'Who We Are',
    'History',
    'Contact',
    <Button 
      key="startButton" 
      type='start-button' 
      value="Questions?" 
      style={{color: 'white'}} 
      onClick={() => handleClick()}>
    </Button>
  ];

  return (
    <ul className={`menu ${menuOpen && 'menu-open'}`}>
      {linkNames.map((linkName, index) => (

        <li key={index}>

          {linkName === 'Who We Are' ? 

          (<Link 
            href={`#Team`} 
            onClick={() => handleClick()}>
              {linkName}
          </Link>)

             : 
             
          (linkName === 'What We Do' ? 
          
          (<Link 
           href={`#About`} 
           onClick={() => handleClick()}>
            {linkName}
          </Link>)
          
           : 
           
          (typeof linkName === 'string') ? 
          
          (<Link 
            href={`#${linkName}`} 
            onClick={() => handleClick()}>
            {linkName}
          </Link>)
          
           : 

           linkName)}

        </li>

      ))}
    </ul>
  );
}

export default Menu;