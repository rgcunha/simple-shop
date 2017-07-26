import React from 'react'
import PropTypes from 'prop-types'
import './PopoverTrigger.css'

export const PopoverTrigger = (props) => (
  <div className='popover-trigger' onClick={props.handler}>
    {props.children}
  </div>
)

PopoverTrigger.propTypes = {
  handler     : PropTypes.func.isRequired,
  children    : PropTypes.node
}

export default PopoverTrigger
