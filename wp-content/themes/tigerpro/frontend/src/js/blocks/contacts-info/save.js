import { Component } from '@wordpress/element'
import ContactInfo from './components/info-block'

export default class Save extends Component {
  constructor (props) {
    super(props)

    this.state = props.attributes
  }

  render () {
    const {
      isShowBg,
      mainHeading,
      addressHeading,
      phoneHeading,
      emailHeading,
      scheduleHeading,
      phone,
      email,
      address,
      schedule,
      telegram,
      viber,
      whatsapp
    } = this.state

    return (
      <ContactInfo
        context='view'
        isShowBg={isShowBg}
        mainHeading={mainHeading}
        addressHeading={addressHeading}
        phoneHeading={phoneHeading}
        emailHeading={emailHeading}
        scheduleHeading={scheduleHeading}
        phone={phone}
        email={email}
        address={address}
        schedule={schedule}
        telegram={telegram}
        viber={viber}
        whatsapp={whatsapp}
      />
    )
  }
}
