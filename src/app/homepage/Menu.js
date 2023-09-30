import Button from './Button';
import Link from 'next/link';
import dynamic from "next/dynamic";

function Menu({ menuOpen }) {
  const linkNames = [
    'Home',
    'About',
    'Features',
    <Button key="startButton">Start</Button>
  ];

  return (
    <ul className={`menu ${menuOpen && 'menu-open'}`}>
      {linkNames.map((linkName, index) => (
        <li key={index}>
          {typeof linkName === 'string' ? (
            <Link href={`#${linkName}`}>{linkName}</Link>
          ) : (
            linkName
          )}
        </li>
      ))}
    </ul>
  );
}

export default dynamic(() => Promise.resolve(Menu), { ssr: false });