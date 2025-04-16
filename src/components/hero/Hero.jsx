"use client";
import React from "react";
import "./hero.scss";
import heroImg from "../../../public/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="hero-picture"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
