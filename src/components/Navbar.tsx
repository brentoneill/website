import React from 'react';
import { Layout, Menu, Button, Popover } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';
import { size } from "../breakpoints";

//
import logoImg from '@images/logo_light.svg';
const { Header } = Layout;

const Logo = styled.div`
  line-height: 64px;
  margin: 0;
  float: left;

  @media (max-width: ${size.mobileS}) {
    max-width: 200px;
  }
`;

const HeaderWrapper = styled.div`
  .Navbar__mobile-menu-toggle {
    display: none;
  }

  @media (max-width: ${size.tablet}) {
    .Navbar__menu {
      display: none;
    }

    .Navbar__mobile-menu-toggle {
      display: block;
      font-size: 24px;
    }

    .Navbar--mobile {
      ul.Navbar__menu {
        border-right: 0;
      }
    }
  }

  @media (max-width: ${size.mobileM}) {

    .Navbar {
      padding-left: 30px;
      padding-right: 30px;
    }

    .Navbar__mobile-menu-toggle {
      margin-left: 5px;
      font-size: 16px;
      width: 32px;
      height: 32px;
    }
  }
`;

class Navbar extends React.Component {

  renderMenuMarkup(breakpoint: string): JSX.Element {
    return (
      <Menu
        className={`Navbar__menu Navbar__menu--${breakpoint}`}
        theme={breakpoint === 'desktop' ? 'dark' : 'light'}
        mode={breakpoint === 'desktop' ? 'horizontal' : 'vertical'}
        style={{ lineHeight: '64px', float: breakpoint === 'desktop' ? 'right' : 'none' }}
      >
        <Menu.Item key="1">
          <Link to="/team" style={{ color: 'inherit', textDecoration: 'none' }}>
            Team
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="http://marketprotocol.io.s3-website-us-east-1.amazonaws.com/assets/MARKET_Protocol-Whitepaper.pdf"
            style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
            Whitepaper
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            FAQs
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/#ctaSection" style={{ color: 'inherit', textDecoration: 'none' }}>
            Subscribe
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="https://medium.com/market-protocol"
            style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="https://t.me/Market_Protocol_Chat" style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank">
            Telegram
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  render(): JSX.Element {
    return (
      <HeaderWrapper>
        <Header className="Navbar">
          <Logo><a href="/"><img alt="react-static" width="100%" src={logoImg} /></a></Logo>
          {this.renderMenuMarkup('desktop')}
          <Popover
            overlayClassName={'Navbar--mobile'}
            content={this.renderMenuMarkup('mobile')}
            trigger='click'>
            <Button className="Navbar__mobile-menu-toggle"
              shape="circle"
              icon='bars'
              style={{ color: '#fff', cursor: 'pointer', float: 'right', marginTop: 15 }} />
          </Popover>
        </Header>
      </HeaderWrapper>
    );
  }
}

export default Navbar;
