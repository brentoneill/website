import React from 'react';
import {Col, Button, Layout, Row} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-static';
//
const {Footer} = Layout;
import logoImg from '@images/logo_light.svg';
import telegram from '@images/telegram.svg';
import twitter from '@images/twitter.svg';
import medium from '@images/medium.svg';
import github from '@images/github.svg';
import {device} from "@src/breakpoints";

const AboutMarketText = styled.div`
  margin-top: 35px;
  font-size: 12px
  
  @media ${device.tablet} {
    padding-right: 100px;
  }
`;

const HeaderText = styled.h2`
  color: #fff;
  font-size: 14px;
`;

const FooterLink = styled.div`
  margin: 22px 0;
  font-weight: 100;
  
  :hover {
    color: #00E2C1;
  }
`;

const FooterWrapper = styled.div`
  padding: 70px 20px;
  
  @media ${device.tablet} {
    padding: 70px;
  }
`;

class MarketFooter extends React.Component {
  render() {
    return (
      <Footer style={{color: '#fff', height: '460px', padding: '0px'}}>
        <FooterWrapper>
          <Row type="flex" className="hero" align="top">
            <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{marginBottom: '100px'}}>
              <img alt="hero" src={logoImg}/>
              <AboutMarketText>
                MARKET Protocol provides the open source building blocks powering decentralized
                derivatives trading and exchanges on the Ethereum blockchain.
              </AboutMarketText>
              <div style={{marginTop: '35px'}}>
                <Button size="small" type="primary" style={{marginRight: '10px'}}>
                  <Link to="https://t.me/Market_Protocol_Chat" target="_blank">
                    <img alt="telegram" src={telegram} width="80%"/>
                  </Link>
                </Button>
                <Button size="small" type="primary" style={{marginRight: '10px'}} >
                  <Link to="https://twitter.com/MarketProtocol/" target="_blank">
                    <img alt="twitter" src={twitter} width="80%"/>
                  </Link>
                </Button>
                <Button size="small" type="primary" style={{marginRight: '10px'}} >
                  <Link to="https://medium.com/market-protocol" target="_blank">
                    <img alt="medium" src={medium} width="80%"/>
                  </Link>
                </Button>
                <Button size="small" type="primary" style={{marginRight: '10px'}} >
                  <Link to="https://github.com/MARKETProtocol/" target="_blank">
                    <img alt="github" src={github} width="80%"/>
                  </Link>
                </Button>
              </div>
              <AboutMarketText>
                <span style={{marginTop: '35px', display: 'block'}}>©2018 Market Protocol, LLC</span>
              </AboutMarketText>
            </Col>
            <Col xs={12} sm={8} md={4} lg={4} xl={4}>
              <HeaderText>Documentation</HeaderText>
              <FooterLink>
                <Link to="http://marketprotocol.io.s3-website-us-east-1.amazonaws.com/assets/MARKET_Protocol-Whitepaper.pdf"
                      target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Whitepaper
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="http://marketprotocol.io.s3-website-us-east-1.amazonaws.com/assets/MARKET_Protocol-Summary.pdf"
                      target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Summary
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="https://github.com/MARKETProtocol" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Github
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="https://docs.marketprotocol.io/" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Technical Docs
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="#" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  FAQ
                </Link>
              </FooterLink>
            </Col>
            <Col xs={12} sm={8} md={4} lg={4} xl={4}>
              <HeaderText>Community</HeaderText>
              <FooterLink>
                <Link to="https://t.me/Market_Protocol_Chat" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Telegram
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="https://twitter.com/MarketProtocol" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Twitter
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="https://medium.com/market-protocol" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Medium
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="https://discordapp.com/invite/qN8MCbq" target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>
                  Discord
                </Link>
              </FooterLink>
            </Col>
            <Col xs={8} sm={8} md={4} lg={4} xl={4}>
              Organization
              <FooterLink>
                <Link to="/team" style={{color: 'inherit', textDecoration: 'none'}}>
                  Team
                </Link>
              </FooterLink>
              <FooterLink>
                <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
                  Partners
                </Link>
              </FooterLink>
              {/*<FooterLink>*/}
                {/*<Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>*/}
                  {/*Jobs (We're hiring!)*/}
                {/*</Link>*/}
              {/*</FooterLink>*/}
              <FooterLink>
                <Link to="mailto:info@marketprotocool.io" style={{color: 'inherit', textDecoration: 'none'}}>
                  info@marketprotocol.io
                </Link>
              </FooterLink>
            </Col>
          </Row>
        </FooterWrapper>
      </Footer>
    )
  }
}

export default MarketFooter;
