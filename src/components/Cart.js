import React from 'react'
import PropTypes from 'prop-types'
import './Cart.css'
import Popover from './Popover'
import PopoverTrigger from './PopoverTrigger'
import Product from '../containers/cart/product'

class Cart extends React.Component {
  state = { isExpanded: false };

  expand = () => {
    this.setState(() => ({ isExpanded: true }));
    window.addEventListener('click', this.collapse);
  };

  collapse = () => {
    this.setState(() => ({ isExpanded: false }));
    window.removeEventListener('click', this.collapse);
  };

  toggleCart = (e) => {
    e.stopPropagation();
    this.state.isExpanded ? this.collapse() : this.expand();
  };

  listProducts = (products) => {
    return this.props.cart.map((product, index) =>
      <Product key={index} id={index} product={product} />
    )
  };

  render() {
    return (
      <div className='cart'>
        <PopoverTrigger handler={this.toggleCart}>
          <img src="img/cart.svg" alt="cart"/>
          <span className="cart__counter">{this.props.cart.length}</span>
        </PopoverTrigger>
        <Popover id='cart-popover' show={this.state.isExpanded}>
          {this.listProducts(this.props.cart)}
        </Popover>
      </div>
    )
  }
}

Cart.propTypes = {
  cart     : PropTypes.array.isRequired
}

export default Cart
