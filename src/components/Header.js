import React from 'react';
import { Link } from 'react-router-dom'
import Cart from '../containers/cart'
import './Header.css'

const App = () => (
  <header>
    <div className="header-logo">
      <Link to="/"><img src="img/vimcar-logo.svg" alt="vimcar"/></Link>
      <Cart />
    </div>
    <div className="header-nav">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default App
