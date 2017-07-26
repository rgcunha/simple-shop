import React from 'react'
import PropTypes from 'prop-types'
import './Price.css'

export const Price = ({type, value}) => {
  const priceClass = () => {
    let defaultClass = ['price'];
    const typeToClass = {
      'discount': 'price--new',
      'old'     : 'price--old'
    }
    if (type === 'default') {
      return defaultClass;
    }
    return defaultClass.concat(typeToClass[type]).join(" ");
  }
  return (<span className={priceClass()}>{value}</span>)
}

Price.propTypes = {
  value  : PropTypes.number.isRequired,
  type   : PropTypes.oneOf(['old', 'discount', 'default'])
}

export default Price
