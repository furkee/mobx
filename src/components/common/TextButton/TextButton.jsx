/* eslint react/prop-types: 0 object-curly-newline: 0 */

import React from 'react';
import './TextButton.css';

const TextButton = ({ onClick, style, children, className, ...props }) => (
  <button
    // eslint-disable-next-line
    className={'text-button ' + className}
    onClick={onClick}
    style={style}
    {...props}
  >
    {children}
  </button>
);

export default TextButton;
