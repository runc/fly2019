import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <Link to="/" style={styles.logo}>
        <span style={styles.brand}>魔数</span>
        <div style={styles.workbench}>
          自助运营
          <br />
          管理平台
        </div>
      </Link>
    );
  }
}

const styles = {
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    color: '#fff',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  workbench: {
    color: '#fff',
    fontSize: '12px',
    marginLeft: '15px',
  },
};
