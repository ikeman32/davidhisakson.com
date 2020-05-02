import React from 'react';
import { Route, Link } from 'react-router-dom';
import {Home} from './components';
import './App.scss';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            Home
          </Link>
        </nav>
      </header>
      <>
        <Route exact path="/" component={Home} />
      </>
    </div>
  );
}

export default App;
