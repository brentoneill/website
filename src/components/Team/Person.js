import React from 'react'
import { Link } from 'react-static'
import { MarketText } from '@styledComponents'
import BioIcon from '@images/icons/bio.svg'
import EmailIcon from '@images/icons/email.svg'
import LinkedInIcon from '@images/icons/linkedin.svg'

class Person extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, title, img, email, linkedin, bio } = this.props.data

    return(
      <div
        /* width handled by PersonWrap styled component in src/Styles.tsx */
        style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: 240, marginTop: 30}}
      >

        { /* image */ }
        <img
          className={(bio) ? 'become-opaque-on-hover' : ''}
          src={img}
          style={{width: 100, height: 100, cursor: (bio) ? 'pointer' : 'default'}}
          onClick={() => (bio) ? this.props.focus() : null}
        />

        { /* name and title */ }
        <MarketText style={{textAlign: 'center', paddingTop: 10}}>
          {name}
          <br />
          {title}
        </MarketText>

        { /* social links */ }
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 92}}>

          { /* bio */
            (bio)
              ? <img
                  className={'become-opaque-on-hover'}
                  src={BioIcon}
                  style={{cursor: 'pointer'}}
                  onClick={this.props.focus}
                />
              : null
          }

          { /* email */
            (email)
              ? <Link to={`mailto:${email}`} target={"_blank"}>
                  <img className={'become-opaque-on-hover'} src={EmailIcon} />
                </Link>
              : null
          }

          { /* linkedin */
            (linkedin)
              ? <Link to={linkedin} target={"_blank"}>
                  <img className={'become-opaque-on-hover'} src={LinkedInIcon} />
                </Link>
              : null
          }
        </div>
      </div>
    )
  }
}

export default Person
