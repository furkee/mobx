import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Panel.css';

@observer
class Panel extends Component {
  render() {
    return (
      <div className="panel-container">
        <img className="hamburger" src={require('../../images/hamburger.png')} alt="H" />
        <p className="header">IETT KONTROL PANELİ</p>
        <button className="save-button">KAYDET</button>
      </div>
    );
  }
}

export default Panel;
