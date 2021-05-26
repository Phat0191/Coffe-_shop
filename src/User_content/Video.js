import React, {Fragment}from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
// import './Video.css';

function HeroSection() {
  return (
    <Fragment>
    <Router>
    <div className='hero-container'>
      <video src='/videos/video-101.mp4' autoPlay loop muted />
      <h1>THE BEST COFFEE TESTING EXPERIENCE</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Order now
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          View Menu <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    </Router>
  </Fragment>
  );
}

export default HeroSection;
