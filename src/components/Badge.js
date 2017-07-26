import React from 'react'
import PropTypes from 'prop-types'
import './Badge.css'

export const Badge = ({children}) => {
  if (!children) { return null }
  return (
    <span className="badge">{children}</span>
  )
}

Badge.propTypes = {
  children      : PropTypes.node
}

export default Badge
