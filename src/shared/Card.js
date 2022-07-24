import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children, rev}) => {
  return (
    <div className={!rev? 'card' : 'card reverse'}>{children}</div>
  )
}

Card.defaultProps = {
    rev: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}


export default Card