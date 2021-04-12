import React from 'react';
import { Link } from 'react-router-dom'
import Cart from '../containers/cart'
import './Header.css'

const App = () => (
  <header>
    <div className="header-logo">
      <Link to="/"><img src="img/logo.svg" alt="company-logo"/></Link>
      <Cart />
    </div>
    <div className="header-nav">
      <nav>
        <ul>
          <li><Link to="/">Catalog</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/terms">Terms</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default App
