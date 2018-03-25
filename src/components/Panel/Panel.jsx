import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProps } from 'mobx-react';
import { hamburger } from '../../images';
import PanelStore from '../../stores/PanelStore';
import Menu from '../Menu/';
import { TextButton } from '../common/';
import './Panel.css';

@inject(PanelStore.name)
@observer
export default class Panel extends Component {
  static propTypes = {
    PanelStore: MobxProps.observableObject.isRequired,
  }

  switchHamburgerMenu = () => {
    this.props.PanelStore.switchHamburgerMenu();
  }

  render() {
    return (
      <div className="panel-container">
        <TextButton onClick={() => this.switchHamburgerMenu()}>
          <img alt="H" className="hamburger" src={hamburger} />
        </TextButton>
        {
          this.props.PanelStore.hamburgerActive
            ? <Menu />
            : null
        }
        <p className="header">IETT KONTROL PANELİ</p>
        <TextButton className="save-button" onClick={() => this.props.PanelStore.save()}>
          KAYDET
        </TextButton>
      </div>
    );
  }
}
