
import './Button.css';
import dynamic from "next/dynamic";

function Button() {
  return (
    <a href="#" className="start-button">Start</a>
  )
}

export default dynamic (() => Promise.resolve(Button), {ssr: false})