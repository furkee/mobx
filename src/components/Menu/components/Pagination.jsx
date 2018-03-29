import React from 'react';
import PropTypes from 'prop-types';
import { TextButton } from '../../common';
import { leftArrow, rightArrow } from '../../../images/';
import './Pagination.css';

const Pagination = ({ current, total, callback }) => (
  <div className="pagination-container">
    <TextButton onClick={() => callback(current - 1)}>
      <img alt="P" className="pagination-icon" src={leftArrow} />
    </TextButton>

    <div className="">
      {`${current + 1}/${total}`}
    </div>

    <TextButton onClick={() => callback(current + 1)}>
      <img alt="N" className="pagination-icon" src={rightArrow} />
    </TextButton>
  </div>
);

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Pagination;
