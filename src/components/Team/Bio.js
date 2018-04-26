import React from 'react'
import { Link } from 'react-static'
import { MarketText, BioModalContentWrap } from '@styledComponents'
import CloseIcon from '@images/icons/close.svg'
import EmailIcon from '@images/icons/email.svg'
import LinkedInIcon from '@images/icons/linkedin.svg'
import colors from '@styles/json/colors'

class Bio extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      window.addEventListener('keydown', (e) => (e.keyCode === 27) ? this.props.unfocus() : null)
    }
  }

  render() {
    const { name, title, img, email, linkedin, bio, shouldFillWholeWidth } = this.props.data

    return(
      <div
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: colors.darkGreyOpaque}}
      >

        { /* clicking bg hides modal */ }
        <div onClick={this.props.unfocus} style={{zIndex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} />

        { /* white bg modal */ }
        <BioModalContentWrap style={{zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white}}>

          { /* close icon */ }
          <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%', height: 30, cursor: 'pointer'}}>
            <div
              className={'become-opaque-on-hover'}
              onClick={this.props.unfocus}
              style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 32, width: 32, backgroundColor: colors.medGrey}}
            >
              <img src={CloseIcon} style={{width: 26, height: 26}} />
            </div>
          </div>

          { /* image */ }
          <img src={img} style={{width: 100, height: 100, marginTop: 10}} />

          { /* name and title */ }
          <MarketText style={{textAlign: 'center', padding: '10px 0 0 0'}}>
            {name}
            <br />
            {title}
          </MarketText>

          { /* bio */ }
          <MarketText style={{textAlign: 'left', padding: '0px 40px 0px 40px'}}>
            {bio}
          </MarketText>

          { /* social links */ }
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px 0px 30px 0px'}}>

            { /* email */
              (email)
                ? <Link style={{margin: '0px 5px 0px 5px'}} to={`mailto:${email}`} target={"_blank"}>
                    <img className={'become-opaque-on-hover'} src={EmailIcon} />
                  </Link>
                : null
            }

            { /* linkedin */
              (linkedin)
                ? <Link style={{margin: '0px 5px 0px 5px'}} to={linkedin} target={"_blank"}>
                    <img className={'become-opaque-on-hover'} src={LinkedInIcon} />
                  </Link>
                : null
            }
          </div>
        </BioModalContentWrap>
      </div>

    )
  }
}

export default Bio
