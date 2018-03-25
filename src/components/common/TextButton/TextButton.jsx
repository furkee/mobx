/* eslint react/prop-types: 0 object-curly-newline: 0 */

import React from 'react';
import './TextButton.css';

const TextButton = ({ style, children, className, ...props }) => (
  <button
    // eslint-disable-next-line
    className={'text-button ' + (className || '')}
    style={style}
    {...props}
  >
    {children}
  </button>
);

export default TextButton;
