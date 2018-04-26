import React from 'react'
import { Row, Col } from 'antd'
import config from './config.js'
import { MarketText, PersonWrap, TeamDivWithResponsiveWidth } from '@styledComponents'
import colors from '@styles/json/colors'
import Cta from '@components/Cta'
import Bio from '@components/Team/Bio'
import Person from '@components/Team/Person'

class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bioIsVisible: false,
      focusedPerson: null
    }

    this.focusPerson = this.focusPerson.bind(this)
    this.unfocusPerson = this.unfocusPerson.bind(this)
  }

  focusPerson(info) {
    this.setState({
      focusedPerson: info
    }, () => this.setState({
      bioIsVisible: true
    }))
  }

  unfocusPerson() {
    this.setState({
      bioIsVisible: false
    })

    setTimeout(() => this.setState({
      focusedPerson: null
    }), 300)
  }

  renderPeople(people) {
    return people.map((o, i) => {
      return(
        <Col key={i} xs={24} sm={24} md={8}>
          <Person
            data={o}
            focus={() => this.focusPerson(o)}
            unfocus={this.unfocusPerson}
          />
        </Col>
      )
    })
  }

  render() {
    const { bioIsVisible, focusedPerson } = this.state
    const { teamMembers, advisors } = config

    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

        { /* 'the team' title and info */ }
        <TeamDivWithResponsiveWidth style={{padding: '40px 0px 20px 0px'}}>
          <MarketText header>
            {"The Team"}
          </MarketText>

          <MarketText>
            {"Founding members of our team have been managing a 24-hour algorithmic trading group since 2014 and cumulatively have over 30 years of electronic trading experience. We have expertise in market microstructure, order routing, order management and have written directly to exchanges across the globe."}
            <br />
            <br />
            {"The rest of the MARKET team comes from a diverse set of technical backgrounds."}
            <br />
            <br />
            {"Together, we quickly realized how immature the crypto exchanges were. This created an opportunity for conceptualization and development of MARKET which provided us a blank slate to address issues with both the crypto and traditional exchange models."}
          </MarketText>
        </TeamDivWithResponsiveWidth>

        { /* team members */ }
        <TeamDivWithResponsiveWidth>
          <Row justify={'center'} align={'middle'}>
            { this.renderPeople(teamMembers) }
          </Row>
        </TeamDivWithResponsiveWidth>

        { /* 'advisors' title */ }
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 25, backgroundColor: colors.lightGrey, padding: '45px 0px 80px 0px'}}>
          <TeamDivWithResponsiveWidth>
            <MarketText header>
              {"Advisors"}
            </MarketText>
          </TeamDivWithResponsiveWidth>

          { /* advisors */ }
          <TeamDivWithResponsiveWidth style={{display: 'flex', flexWrap: 'wrap', backgroundColor: colors.lightGrey, padding: '15px 0px 0px 0px'}}>
            <Row justify={'center'} align={'middle'}>
              { this.renderPeople(advisors) }
            </Row>
          </TeamDivWithResponsiveWidth>
        </div>

        { /* thin divider line */ }
        <div style={{width: '100%', backgroundColor: colors.lightGrey}}>
          <div style={{width: '75%', height: 1, backgroundColor: colors.medGrey, marginLeft: '12.5%'}} />
        </div>

        { /* contact */ }
        <div style={{width: '100%'}}>
          <Cta />
        </div>

        { /* bio overlay */ }
        <div className={['bio-wrap', bioIsVisible && 'visible'].join(' ')}>
          <Bio
            data={focusedPerson || {}}
            unfocus={this.unfocusPerson}
          />
        </div>
      </div>
    )
  }
}

export default Team
