import React from 'react'
import PropTypes from 'prop-types'
import Product from '../containers/catalog/product'
import './Catalog.css'

class Catalog extends React.Component {
  componentDidMount() {
    this.props.fetchCatalog();
  }

  listProducts () {
    return this.props.catalog.map((product) =>
      <Product key={product.name} product={product} buttonText="Add to cart" />
    )
  }

  render() {
    return (
      <div className='catalog'>
        {this.listProducts()}
      </div>
    );
  }
}

Catalog.propTypes = {
  catalog     : PropTypes.array.isRequired,
  fetchCatalog: PropTypes.func.isRequired,
}

export default Catalog;
