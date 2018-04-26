import React from 'react';
import {Col, Row} from 'antd';
import styled from 'styled-components';
//
import {MarketText, MarketList} from '../Styles';
import asset1 from '@images/asset_1.svg';
import asset2 from '@images/asset_2.svg';
import {device, size} from "@src/breakpoints";

const IllustrationContainer = styled.div`
  background-color: #00E2C1;
  padding: 100px;
`;

const SectionWrapper = styled.section`
  padding: 70px;
  background: #F0F0F0;
  
  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px;
  }
`;

const TextWrapper = styled.div`
  padding: 20px;

  @media ${device.tablet} {
    padding: 0 40px;
  }
`;

class Solution extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <IllustrationContainer>
              <img alt="exchange" src={asset1}/>
            </IllustrationContainer>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketText header>Issues with current exchanges</MarketText>
              <MarketList>centralized</MarketList>
              <MarketList>security, safety, and custody of funds</MarketList>
              <MarketList>hard to short or hedge crypto assets</MarketList>
              <MarketList>limited exposure to cross-chain or real world assets</MarketList>
            </TextWrapper>
          </Col>
          <Col xs={24} sm={24} md={{span: 12, push: 12}} lg={{span: 12, push: 12}} xl={{span: 12, push: 12}}>
            <IllustrationContainer>
              <img alt="exchange" src={asset2}/>
            </IllustrationContainer>
          </Col>
          <Col xs={24} sm={24} md={{span: 12, pull: 12}} lg={{span: 12, pull: 12}} xl={{span: 12, pull: 12}}>
            <TextWrapper>
              <MarketText header>How we solve these issues</MarketText>
              <p style={{fontSize: '18px'}}>MARKET Protocol Smart Contracts decentralize accounting, custody of funds and
                position management.</p>
              <MarketList>Fully collateralized</MarketList>
              <MarketList>Trustless</MarketList>
              <MarketList>Real world and digital assets</MarketList>
            </TextWrapper>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}
export default Solution;
