import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'
import { Badge } from './Badge'
import { Price } from './Price'
import './CatalogProduct.css'

export const CatalogProduct = (props) => {
  const { img, name, price, discount, badge } = props.product;
  const buttonText = "Add to Cart";

  const clickHandler = (e) => {
    e.preventDefault();
    props.addToCart(props.product);
  }

  const discountPrice = () => {
    if (!discount) { return null; }
    return (<Price value={price - discount} type='discount' />)
  }

  const priceType = () => discount ? 'old' : 'default';

  return (
    <div className='catalog-product'>
      <div className='catalog-product-frame'>
        <img className='catalog-product-frame__image' src={img} alt={name}/>
        <Badge>{badge}</Badge>
        <Button handler={clickHandler}>{buttonText}</Button>
      </div>
      <div className='catalog-product-details'>
        <p className='catalog-product-details__name'>{name}</p>
        <Price value={price} type={priceType()} />
        {discountPrice()}
      </div>
    </div>
  )
}

CatalogProduct.propTypes = {
  addToCart   : PropTypes.func.isRequired,
  product     : PropTypes.object.isRequired
}

export default CatalogProduct
