import styled, { injectGlobal } from 'styled-components';
import {size} from "./breakpoints";

injectGlobal`
.bio-wrap {
  visibility: hidden;
  opacity: 0;
  transition: 250ms;

  &.visible {
    visibility: visible;
    opacity: 1;
    transition: 250ms;
  }
}

.become-opaque-on-hover {
  opacity: 1;
  transition: 250ms;

  &:hover {
    opacity: 0.75;
    transition: 250ms;
  }
}
`

const MarketText = styled.h1`
  font-size: ${props => props.header ? '36px;' : '18px;'};
  font-weight: ${props => props.header ? '500;' : '300;'};

  @media (max-width: ${size.laptop})  {
    font-size: ${props => props.header ? '28px;' : '14px;'};
  }
`;

const MarketList = styled.li`
  font-size: 18px;
  padding: 10px 0;
  list-style: none;
  font-weight: 300;
  margin-left: 20px;
  :before {
    content: "";
    line-height: 1em;
    width: 10px;
    height: 10px;
    background-color: #00E2C1;
    float: left;
    margin-top: 10px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: -20px;
  }
  @media (max-width: ${size.laptop})  {
    font-size: 14px;
    :before {
      margin-top: 5px;
    }
  }
`;

const TeamDivWithResponsiveWidth = styled.div`
  width: 60%;

  @media (max-width: ${size.laptop}) {
    width: 80%;
  }

  @media (max-width: ${size.tablet}) {
    width: 92%;
  }
`

const BioModalContentWrap = styled.div`
  width: 515px;

  @media (max-width: ${size.tablet}) {
    width: 350px;
  }
`

export { MarketList, MarketText, BioModalContentWrap, TeamDivWithResponsiveWidth };
