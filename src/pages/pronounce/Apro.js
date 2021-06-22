import React from "react";
import { useState } from "react";
import "./pronounce.css";

const CardFront = () => {
    return (<div className = "flip-card-front">
    <h1 style={{color: "black"}}>im card ke age</h1>
    </div>)
}

const CardBack = () => {
  return( 
  <>
  <div className = "flip-card-back">
  <h1>im card ke peeche</h1>
  </div>
  </>);
};

const Apro = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className = "flip-card">
    <div className="flip-card-inner" onClick={() => setShow(!show)}>
        {show && <CardFront />}
        {!show && <CardBack />}
      </div>
    </div>
      
    </>
  );
};

export default Apro;
