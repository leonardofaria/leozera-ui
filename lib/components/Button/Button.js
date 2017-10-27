/*
 * Button component
 *
 * @usage
 * <Button>Hello Stranger</Button>
 */
import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  const {
    href, children, onClick, disabled, className, ...attrs
  } = props
  const Element = href ? 'a' : 'button'
  const role = Element === 'a' ? 'button' : null
  let btnClass = 'btn'
  if (className !== undefined) {
    btnClass = className
  }

  return (
    <Element
      className={btnClass}
      href={href}
      onClick={onClick}
      role={role}
      disabled={disabled}
      {...attrs}
    >
      {children}
    </Element>
  )
}

Button.propTypes = {
  /** Pass an href prop to make the button an `a` element instead of a `button` */
  href: PropTypes.string,
  /** Content for the button */
  children: PropTypes.node.isRequired,
  /** Function to run when the button is clicked */
  onClick: PropTypes.func,
  /** Disable button */
  disabled: PropTypes.bool,
  /** CSS classes */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
}

Button.defaultProps = {
  href: null,
  onClick: null,
  disabled: false,
  className: null,
}

export default Button
