import React from "react"
import letterO from './assets/Letter-O.svg';
import letterE from './assets/Letter-E.svg';
import letterH from './assets/Letter-H.svg';
import letterL from './assets/Letter-L.svg';
import Mouse from './assets/Mouse.svg';
import judy from './assets/judy-zheng.svg';
import './App.css';
import { useEffect, useState } from "react";
import {
  Link,
} from "react-router-dom";

function App() {

  useEffect(() => {
      document.addEventListener('mousemove', (e) => {
          const mouse = document.getElementsByClassName('mouse')[0];
          mouse.setAttribute('style','position: absolute; top:'+(window.innerHeight*0.7+(e.pageY*0.15))+'px; left:'+ (window.innerWidth*0.7+(e.pageX*0.10))+ 'px;');  
      })
  }, [])

  const words = ["welcome!", "(click the button)"]
  const [textValue, setTextValue] = useState(words);

  useEffect(() => {
    let screenText = words;

    var i = Math.floor(screenText.length * Math.random());
    setTextValue(screenText[i])
  },[])

  return (
      <div className="App">
        <header className="App-header">
          <div className="HELLO-logo">
            <img src={letterH} className="H-logo" alt="logo" />
            <img src={letterE} className="E-logo" alt="logo" />
            <img src={letterL} className="L-logo" alt="logo" />
            <img src={letterL} className="L-logo" alt="logo" />
            <img src={letterO} className="O-logo" alt="logo" />
          </div>
          <button className="visit">
            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>take a visit</Link>
          </button>
          <img src={Mouse} className="mouse" alt="mouse"/>
          <div className="JUDY-logo">
            <img src={judy} className="judy" alt="judy" />
          </div>
          <div className="body-text">
          developer | ui/ux designer | artist 
          </div>
          <div className="screen-text">{textValue}</div>
        </header>
      </div>
  );
}

export default App;
