import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Hi There,</p>
          <h1 className="hero-title">
            I am Ven<span className="accent">i</span>ssa
          </h1>
          <p className="hero-subtitle">I am designer during daytime</p>
          <p className="hero-caption">&amp; work with batman during nights.</p>
          <button className="hero-cta">Ask Me How</button>
        </div>

        <div className="hero-art">
          <img src="/assets/hro-img.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
