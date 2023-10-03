import { useState } from "react";
import chrome from 'webextension-polyfill';
import './Popup.css';

export default function Popup() {
  const [count, setCount] = useState(0);
  // get page title
  
  const incrementCount = async() => {
    // send message to background script
    chrome.runtime.sendMessage({ message: "increment_count" });
    setCount(count + 1);
  };
  
  const decrementCount = () => {
    // send message to background script
    chrome.runtime.sendMessage({ message: "decrement_count" });
    setCount(count - 1);
  };
  
  return (
    <div className="Popup">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}