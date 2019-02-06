import React, { Component } from 'react';
import './header.css'

class Home extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className='model-name'>
            <a href='/'>
              <p className='portfolio-name'>DANIELLE TOLAR</p>
            </a>
          </div>
          <div className='header-menu-group'>
            <div className='menu'>
              <ul>
                <li className='menu-item'><a href='/'>Home</a></li>
                <li className='menu-item'><a href='/#/about'>About</a></li>
                <li className='menu-item'><a href='/#/portfolio'>Portfolio</a></li>
                <li className='menu-item'><a href='/#/contact'>Contact</a></li>
              </ul>
            </div>
            <div className='social'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;