import React from 'react';
import {Layout, Menu, Button, Popover} from 'antd';
import styled from 'styled-components';
import logoImg from 'images/logo_light.svg';
import {Link} from 'react-static';
import {size} from "../breakpoints";

//
const { Header } = Layout;

const Logo = styled.div`
  line-height: 64px;
  margin: 0;
  float: left;
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
    }

    .Navbar--mobile {
      ul.Navbar__menu {
        border-right: 0;
      }
    }
  }
`;

class Navbar extends React.Component {

  renderMenuMarkup(breakpoint: string): JSX.Element {
    return (
      <Menu
        className={`Navbar__menu Navbar__menu--${breakpoint}`}
        theme={ breakpoint === 'desktop' ? 'dark' : 'light' }
        mode={ breakpoint === 'desktop' ? 'horizontal' : 'vertical' }
        style={{lineHeight: '64px', float: breakpoint === 'desktop' ? 'right' : 'none'}}
      >
        <Menu.Item key="1">
          <Link to="/about" style={{color: 'inherit', textDecoration: 'none'}}>
            Team
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
            Whitepaper
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
            FAQs
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
            Subscribe
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="https://medium.com/market-protocol" style={{color: 'inherit', textDecoration: 'none'}}>
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="https://t.me/Market_Protocol_Chat" style={{color: 'inherit', textDecoration: 'none'}}>
            Telegram
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  render(): JSX.Element {
    return (
      <HeaderWrapper>
        <Header className="Navbar--desktop">
          <Logo><a href="/"><img alt="react-static" width="100%" src={logoImg}/></a></Logo>
            {this.renderMenuMarkup('desktop')}
            <Popover
              overlayClassName={'Navbar--mobile'}
              content={this.renderMenuMarkup('mobile')}
              trigger='click'>
              <Button className="Navbar__mobile-menu-toggle"
                      shape="circle"
                      icon='bars'
                      style={{ color: '#fff', cursor: 'pointer', float: 'right', marginTop: 15, fontSize: 24 }}/>
            </Popover>
        </Header>
      </HeaderWrapper>
    );
  }
}

export default Navbar;
