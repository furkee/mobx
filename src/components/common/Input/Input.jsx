/* eslint-disable */

import React from 'react';
import './Input.css';

const Input = ({ id, label, ...props }) => (
  <div className="input-group">
    <label htmlFor={id} className="input-label">{label}</label>
    <input id={id} className="input-field" {...props} />
  </div>
);

export default Input;
