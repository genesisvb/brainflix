import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
        <video className="hero__video" src="https://project-2-api.herokuapp.com/stream" controls poster="https://i.imgur.com/l2Xfgpl.jpg"></video>
    </div>
  )
}

export default Hero;