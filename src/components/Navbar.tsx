import React from 'react';
import { Layout, Menu, Button, Popover } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';
import { size } from "../breakpoints";
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

const StyledMenu= styled(Menu as any)`
  @media (max-width: ${size.tablet}) {
    &.ant-menu-dark {
      display: none;
    }

    &.ant-menu-light.ant-menu-vertical {
       display: block;
       background: #fff;
       border-right: 0;

       .ant-menu-item-selected {
         border-radius: 12px;
         background-color: #f1f1f1;
         color: #00AD94;
       }
    }
  }
`;

const MobileMenuToggle = styled(Button)`
  &.ant-btn {
    display: none;
    cursor: pointer;
    float: right;
    margin-top: 13px;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  i {
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: ${size.tablet}) {
    &.ant-btn {
      display: block;
    }
  }

  @media (max-width: ${size.mobileM}) {
    &.ant-btn {
      margin-left: 5px;
      width: 32px;
      height: 32px;
      margin-top: 17px;
      line-height: 32px;
      i { font-size: 16px; }
    }
  }
`

const HeaderWrapper = styled.div`
  @media (max-width: ${size.mobileM}) {
    .ant-layout-header { padding-left: 30px; padding-right: 30px;}
  }

  @media (max-width: ${size.mobileS}) {
    .ant-layout-header { padding-left: 20px; padding-right: 20px;}
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
`;

class Navbar extends React.Component {

  renderMenuMarkup(breakpoint: string): JSX.Element {
    return (
      <StyledMenu
        theme={breakpoint === 'desktop' ? 'dark' : 'light'}
        mode={breakpoint === 'desktop' ? 'horizontal' : 'vertical'}
        style={{ lineHeight: '64px', float: breakpoint === 'desktop' ? 'right' : 'none' }}>
        <Menu.Item key="1">
          <Link to="/team" style={{color: 'inherit', textDecoration: 'none'}}>
            Team
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="http://marketprotocol.io.s3-website-us-east-1.amazonaws.com/assets/MARKET_Protocol-Whitepaper.pdf"
                style={{color: 'inherit', textDecoration: 'none'}} target="_blank">
            Whitepaper
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="https://docs.marketprotocol.io/#faq-general" style={{color: 'inherit', textDecoration: 'none'}}>
            FAQs
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/#ctaSection" style={{color: 'inherit', textDecoration: 'none'}}>
            Subscribe
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="https://medium.com/market-protocol"
                style={{color: 'inherit', textDecoration: 'none'}} target="_blank">
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="https://t.me/Market_Protocol_Chat" style={{color: 'inherit', textDecoration: 'none'}}
                target="_blank">
            Telegram
          </Link>
        </Menu.Item>
      </StyledMenu>
    );
  }

  render(): JSX.Element {
    return (
      <HeaderWrapper>
        <Header>
          <Logo><a href="/"><img alt="react-static" width="100%" src={logoImg} /></a></Logo>
          {this.renderMenuMarkup('desktop')}
          <Popover getPopupContainer={triggerNode => triggerNode.parentNode as HTMLElement}
                   content={this.renderMenuMarkup('mobile')}
                   trigger='click'
                   arrowPointAtCenter={true}>
            <MobileMenuToggle shape="circle" icon='bars'/>
          </Popover>
        </Header>
      </HeaderWrapper>
    );
  }
}

export default Navbar;
