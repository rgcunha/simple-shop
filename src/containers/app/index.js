import React from 'react';
import { Route } from 'react-router-dom'
import About from '../about'
import Catalog from '../catalog'
import Header from '../../components/Header'

const App = () => (
  <div>
    <Header />
    <div className="container">
      <main>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  </div>
)

export default App
