import React from 'react'
import PropTypes from 'prop-types'
import './Popover.css'

export const Popover = (props) => {
  const clickHandler = (e) => e.stopPropagation();
  if (!props.show) return null;
  return (
    <div className="popover" onClick={clickHandler}>
      {props.children}
    </div>
  )
}

Popover.propTypes = {
  show        : PropTypes.bool.isRequired,
  children    : PropTypes.node
}

export default Popover
