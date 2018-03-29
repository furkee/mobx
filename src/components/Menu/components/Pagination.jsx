import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextButton } from '../../common';
import './Pagination.css';

export default class Pagination extends Component {
  static propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    callback: PropTypes.func.isRequired,
  }

  render() {
    const { current, total, callback } = this.props;
    return (
      <div className="pagination-container">
        <TextButton onClick={() => callback(current - 1)}>Prev</TextButton>
        <p>{`${current + 1}/${total}`}</p>
        <TextButton onClick={() => callback(current + 1)}>Next</TextButton>
      </div>
    );
  }
}
