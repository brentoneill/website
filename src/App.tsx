import React from 'react';
import {Router} from 'react-static';
import {injectGlobal} from 'styled-components';
import {hot} from 'react-hot-loader';
//
import Routes from 'react-static-routes';
import {Layout} from 'antd';
const {Content} = Layout;
import MarketFooter from '@components/Footer';
import Navbar from '@components/Navbar';

// NOTE: Where can I put these navbar styles?

injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }

  .Navbar--mobile {
    ul {
      background: #fff;
      border-right: 0;
    }

    .ant-popover-arrow {
      top: -4px;
    }

    .ant-popover-inner-content {
      padding-left: 10px;
      padding-right: 10px;
    }

    .ant-popover-inner {
      border-radius: 25px;
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{width: '100vw'}}>
          <Navbar/>
          <Content style={{background: '#FFFFFF', width: '100%vw'}}>
            <Routes />
          </Content>
          <MarketFooter />
        </Layout>
      </Router>
    )
  }
}

export default hot(module)(App);
