import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextButton } from '../../common';
import { leftArrow, rightArrow } from '../../../images/';
import './Pagination.css';

export default class Pagination extends Component {
  static propTypes = {
    current: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    callback: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      page: 0,
    };
  }

  componentWillReceiveProps() {
    this.setState({ page: this.props.current() });
  }

  updatePage = (event) => {
    const page = parseInt(event.target.value, 10) - 1;
    this.setState({ page });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.callback(this.state.page);
    }
  }

  render() {
    const { current, total, callback } = this.props;
    return (
      <div className="pagination-container">
        <TextButton onClick={() => callback(current() - 1)}>
          <img alt="P" className="pagination-icon" src={leftArrow} />
        </TextButton>

        <div className="pagination-input-container">
          <input
            type="number"
            min="1"
            max={total}
            value={this.state.page + 1}
            onChange={this.updatePage}
            onKeyPress={this.handleKeyPress}
          />
          {`/${total}`}
        </div>

        <TextButton onClick={() => callback(current() + 1)}>
          <img alt="N" className="pagination-icon" src={rightArrow} />
        </TextButton>
      </div>
    );
  }
}
