import React from 'react';
import {withSiteData} from 'react-static';
//

import {MarketText} from '../Styles';
import {device, size} from "../breakpoints";

import Hero from "@components/Hero";
import Solution from "@components/Solution";
import Chain from "@components/Chain";
import Dapp from "@components/Dapp";
import BuildDapp from "@components/BuildDapp";
import Cta from "@components/Cta";
import styled from "styled-components";

const MarketMainText = MarketText.extend`
  font-size: 25px;

  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }

`;

const AboutWrapper = styled.section`
  padding: 50px;

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 70px;
  }
  
  @media ${device.tablet} {
    padding: 100px;
  }

  @media ${device.laptopL} {
    padding: 150px;
  }

`;

export default withSiteData(() => (
  <div>
    <Hero/>
    <AboutWrapper>
      <MarketMainText>
        <span style={{color: '#00E2C1', fontWeight: 'bold'}}>MARKET Protocol</span> has been created to provide a
        secure, flexible,
        open source foundation for decentralized trading on the Ethereum blockchain.
        We provide the pieces necessary to create a decentralized exchange,
        including the requisite clearing and collateral pool infrastructure,
        enabling third parties to build applications for trading.
      </MarketMainText>
    </AboutWrapper>
    <Solution/>
    <Chain/>
    <Dapp/>
    <BuildDapp/>
    <Cta/>
  </div>
))
