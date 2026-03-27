import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Anjali Naragude</h1>

      <h3>
        <Typewriter
          words={["DevOps Engineer", "AWS Specialist", "CI/CD Expert"]}
          loop
          cursor
        />
      </h3>

      <p>Bangalore, India</p>
    </section>
  );
}

export default Hero;