import React from 'react';
import {Col, Row} from 'antd';
import styled from 'styled-components';
//
import {MarketText, MarketList} from '@src/Styles';
import chain1 from '@images/chain1.svg'
import chain2 from '@images/chain2.svg'
import rightArrow from '@images/right_arrow.svg'
import leftArrow from '@images/left_arrow.svg'
import asset10 from '@images/asset_10.svg'
import asset4 from '@images/asset_4.svg'
import asset7 from '@images/asset_7.svg'
import asset8 from '@images/asset_8.svg'
import {device} from "@src/breakpoints";

const Wrapper = styled.div`
  background-color: ${props => props.bg || '#fff'};
  justify-content: center;
  display: flex;
  flex-direction: column;
  
  @media ${device.mobileS} {
    padding: ${props => props.padded ? '20px' : '0px'};
    height: 220px;
  }
  
  @media ${device.tablet} {
    height: 270px;
  }
  
  @media ${device.laptop} {
    height: 470px;
    padding: ${props => props.padded ? '70px' : '0px'};
  }

`;

const Arrow = styled.img`
  position: absolute;
  width: 10%;
`;

const ChainIllustration = styled.img`
  width: 30%;
  margin: 0 auto;
`;


class Chain extends React.Component {
  render() {
    return (
      <section id="chains">
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#fff" padded>
              <MarketText header>On-chain</MarketText>
              <MarketList>easily short crypto assets without borrowing</MarketList>
              <MarketList>enables traders and businesses to hedge price</MarketList>
            </Wrapper>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <Wrapper bg="#181E26">
              <img alt="exchange" src={chain1} style={{marginTop: '80px'}} width='100%'/>
              <MarketText style={{color: '#fff', textAlign: 'center'}}>Volatile</MarketText>
            </Wrapper>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <Wrapper bg="#00E2C1">
              <Arrow alt="rightarrow" src={rightArrow} style={{paddingBottom: '35px'}}/>
              <img alt="exchange" src={chain2} style={{marginTop: '80px'}} width='100%' />
              <MarketText style={{color: '#000', textAlign: 'center'}}>Predictable</MarketText>
            </Wrapper>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col xs={24} md={{span: 8, push: 16}} lg={{span: 8, push: 16}} xl={{span: 8, push: 16}}>
            <Wrapper bg="#fff" padded>
              <MarketText header>Cross-chain</MarketText>
              <MarketList>gain cross-chain exposure without taking custody of the underlying asset</MarketList>
              <MarketList>no need for multiple exchanges and wallets</MarketList>
            </Wrapper>
          </Col>
          <Col xs={12} md={{span: 8, pull: 8}} lg={{span: 8, pull: 8}} xl={{span: 8, pull: 8}}>
            <Wrapper bg="#181E26">
              <Arrow alt="leftarrow" src={leftArrow} style={{right: '0px', marginTop: '30px', marginRight: '-1px'}}/>
              <ChainIllustration alt="bitcoin" src={asset10}/>
            </Wrapper>
          </Col>
          <Col xs={12} md={{span: 8, pull: 8}} lg={{span: 8, pull: 8}} xl={{span: 8, pull: 8}}>
            <Wrapper bg="#00E2C1">
              <Arrow alt="exchange" src={rightArrow} style={{marginLeft: '-1px'}}/>
              <ChainIllustration alt="etherium" src={asset8} />
            </Wrapper>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#fff" padded>
              <MarketText header>Off-chain</MarketText>
              <MarketList>recreate traditional off-chain relationships like AAPL/USDT using stable coins such as Tether or Maker Dai</MarketList>
            </Wrapper>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <Wrapper bg="#181E26">
              <Arrow alt="leftarrow" src={leftArrow} style={{right: '0px', marginTop: '30px', marginRight: '-1px'}}/>
              <ChainIllustration alt="tether" src={asset4}/>
            </Wrapper>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <Wrapper bg="#00E2C1">
              <Arrow alt="rightarrow" src={rightArrow} style={{marginLeft: '-1px'}}/>
              <ChainIllustration alt="aapl" src={asset7} />
            </Wrapper>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Chain;
