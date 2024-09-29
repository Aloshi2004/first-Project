// src/Home.js
import React from 'react';
import logo from './LOGO.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-paragraph">This is the Home Page</p>
        <div className="home-container">
      <img src={logo} alt="My Logo" className="home-logo" />
    </div>
      </div>
    );
  }
  


export default Home;
