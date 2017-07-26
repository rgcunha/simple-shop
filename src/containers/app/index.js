import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Catalog from '../catalog'
import Header from '../../components/Header'

const App = () => (
  <div>
    <Header />
    <div className="container">
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/shop" component={Catalog} />
      </main>
    </div>
  </div>
)

export default App
