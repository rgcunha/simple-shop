import React from 'react'
import PropTypes from 'prop-types'
import { Price } from './Price'
import './CartProduct.css'

export const CartProduct = (props) => {
  const { img, name, price, discount } = props.product;
  const buttonText = "Delete";

  const clickHandler = (e) => {
    props.removeFromCart(props.id);
  }

  const discountPrice = () => {
    if (!discount) { return null; }
    return (<Price value={price - discount} type='discount' />)
  }

  const priceType = () => discount ? 'old' : 'default';

  return (
    <div className='cart-product'>
     <div className='cart-product-overview'>
       <img className='cart-product-overview__image' src={img} alt={name}/>
       <span className='cart-product-overview__name'>{name}</span>
     </div>
      <Price value={price} type={priceType()} />
      {discountPrice()}
      <a className='cart-product__action' onClick={clickHandler}>{buttonText}</a>
    </div>
  )
}

CartProduct.propTypes = {
  id               : PropTypes.number.isRequired,
  product          : PropTypes.object.isRequired,
  removeFromCart   : PropTypes.func.isRequired
}

export default CartProduct
