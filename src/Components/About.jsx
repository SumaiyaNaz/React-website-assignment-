import React from "react";
import MyButton from "../Utils/MyButton";
import "@fontsource/roboto";
import logo from '../assets/Photos/Reactlogo.jfif'

const About = () => {
  return (
    <>
      <div className="about">
        <img src={logo} alt="" />
        <h1>React</h1>
        <h2>The library for web and native user interfaces</h2>
        <div className="btns">
          <MyButton value={"Learn React"} />
          <MyButton value={"API Refernence"} />
        </div>
      </div>
    </>
  );
};

export default About;
