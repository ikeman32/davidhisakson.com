import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './components/routes/Routes';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <header>
        <nav className='navigation'>
          <Link className='link' to="/">
            Home
          </Link>
          <Link className='link' to="/Portfolio">
            Portfolio
          </Link>
          <Link className='link' to="/Services">
            Services
          </Link>
          <Link className='link' to="/About">
            About
          </Link>
          <Link className='link' to="/Contact">
            Contact
          </Link>
        </nav>
      </header>
      <div className='Display-Area'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
