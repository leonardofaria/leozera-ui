import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ children }) => <span>{children}</span>;

Badge.propTypes = {
  /** Content for the button */
  children: PropTypes.node.isRequired,
};

export default Badge;
