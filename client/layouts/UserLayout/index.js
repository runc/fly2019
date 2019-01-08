import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@icedesign/base';
import Footer from './components/Footer';
import Intro from './components/Intro';
import routerData from '../../routerConfig';

const { Row, Col } = Grid;

export default class UserLayout extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Row wrap style={styles.row}>
          <Col l="12">
            {/* <Intro /> */}
          </Col>
          <Col l="12">
            <div style={styles.form}>
              <Switch>
                {routerData.map((item, index) => {
                  return item.component ? (
                    <Route
                      key={index}
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                    />
                  ) : null;
                })}

                <Redirect exact from="/user" to="/user/login" />
              </Switch>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100wh',
    minWidth: '1200px',
    height: '100vh',
    backgroundImage:
      'url(http://xx-dev.oss-cn-beijing.aliyuncs.com/dev-static/login-bg.jpg?Expires=1546914817&OSSAccessKeyId=TMP.AQHLLweD2w7Fcy_h0Ibj9HGjwh4oaSH0hgPamCjY3wGuAMCuuwtJbKjVq5WDMC4CFQCfsukyYzcUaD2f1df_L4Sj26UNEwIVAJ5Pv1fWLvwoscOH5JJEvfJ5QySE&Signature=NmgeFxpiLYwUzmxSpzXl4QvBjww%3D)',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
