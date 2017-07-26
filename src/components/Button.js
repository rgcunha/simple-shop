import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export const Button = (props) => {
  const { handler, children } = props;
  return (
    <button className="button button--primary" onClick={handler}>{children}</button>
  )
}

Button.propTypes = {
  handler       : PropTypes.func,
  children      : PropTypes.node
}

export default Button
