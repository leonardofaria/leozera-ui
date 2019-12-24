import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

const cx = classNames.bind(styles) // eslint-disable-line

/** Button component */
const Button = (props) => {
  const {
    href, children, onClick, disabled, className, ...attrs
  } = props;
  const Element = href ? 'a' : 'button';
  const role = Element === 'a' ? 'button' : null;
  const btnClass = cx('btn', className);

  return (
    <Element
      className={btnClass}
      disabled={disabled}
      href={href}
      role={role}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </Element>
  );
};

Button.propTypes = {
  /** Content for the button */
  children: PropTypes.node.isRequired,
  /** CSS classes */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  /** Disable button */
  disabled: PropTypes.bool, // eslint-disable-line react/boolean-prop-naming
  /** Pass an href prop to make the button an `a` element instead of a `button` */
  href: PropTypes.string,
  /** Function to run when the button is clicked */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  href: null,
  onClick: null,
  disabled: false,
  className: null,
};

export default Button;
