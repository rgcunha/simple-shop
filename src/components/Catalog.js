import React from 'react'
import PropTypes from 'prop-types'
import Product from '../containers/catalog/product'
import './Catalog.css'

export const Products = (props) => (
  <div className='catalog'>
    {listProducts(props.catalog)}
  </div>
)

function listProducts (products) {
  return products.map((product) =>
    <Product key={product.name} product={product} buttonText="Add to cart" />
  )
}

Products.propTypes = {
  catalog      : PropTypes.array.isRequired
}

export default Products
