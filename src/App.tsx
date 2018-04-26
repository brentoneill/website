import React from 'react';
import { Router } from 'react-static';
import {injectGlobal} from 'styled-components';
import {hot} from 'react-hot-loader';
//
import Routes from 'react-static-routes';
import {Layout} from 'antd';
const {Content} = Layout;
import MarketFooter from '@components/Footer';
import Navbar from '@components/Navbar';

injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{width: '100vw'}}>
          <Navbar/>
          <Content style={{background: '#FFFFFF', width: '100vw'}}>
            <Routes />
          </Content>
          <MarketFooter />
        </Layout>
      </Router>
    )
  }
}

export default hot(module)(App);
