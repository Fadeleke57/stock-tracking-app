import './Button.css';
import dynamic from "next/dynamic";

function Button({ value, type, onClick }) {
  const handleClick = (event) => {
    if (onClick) {
      onClick();
    }
  };

  if (value === "Questions?" || value === "Contact Us") {
    return (
      <a href="#Contact" className={type} style={{ color: 'white' }}  onClick={handleClick}>
        {value}
      </a>
    );
  }

  else if (value === "Learn More") {
    return (
      <a href="#History" className={type} style={{ color: 'white' }} onClick={handleClick}>
        {value}
      </a>
    );
  }

  return (
    <a href="#" className={type} onClick={handleClick}>
      {value}
    </a>
  );
}

export default Button;