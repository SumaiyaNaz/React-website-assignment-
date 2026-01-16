import React from "react";
import MyButton from "../Utils/MyButton";
import "@fontsource/roboto";

const About = () => {
  return (
    <>
      <div className="about">
        <img src="../Photos/Reactlogo.jfif" alt="" />
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
