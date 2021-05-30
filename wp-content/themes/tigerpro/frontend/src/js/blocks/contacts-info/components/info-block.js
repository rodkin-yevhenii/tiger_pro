import { Component } from '@wordpress/element'
import SectionHeader from './section-header'
import Address from './address'
import Phone from './phone'
import Email from './email'
import Schedule from './shedule'

class ContactInfo extends Component {
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
      whatsapp,
      handleChangeMainHeading,
      handleChangeAddressHeading,
      handleChangePhoneHeading,
      handleChangeEmailHeading,
      handleChangeScheduleHeading,
      handleChangePhone,
      handleChangeEmail,
      handleChangeAddress,
      handleChangeSchedule
    } = this.props

    return (
      <>
        <section className={isShowBg ? 'section section-contacts section-contacts__overlay' : 'section section-contacts'}>
          <div className='container'>
            <div className='contacts'>
              <SectionHeader
                mainHeading={mainHeading}
                handleChangeMainHeading={handleChangeMainHeading}
              />
              <div className='contacts__inner'>
                <div className='contacts__item'>
                  <Address
                    addressHeading={addressHeading}
                    address={address}
                    handleChangeAddressHeading={handleChangeAddressHeading}
                    handleChangeAddress={handleChangeAddress}
                  />
                </div>
                <div className='contacts__item'>
                  <Phone
                    phoneHeading={phoneHeading}
                    phone={phone}
                    telegram={telegram}
                    viber={viber}
                    whatsapp={whatsapp}
                    handleChangePhoneHeading={handleChangePhoneHeading}
                    handleChangePhone={handleChangePhone}
                  />
                </div>
                <div className='contacts__item'>
                  <Email
                    emailHeading={emailHeading}
                    email={email}
                    handleChangeEmailHeading={handleChangeEmailHeading}
                    handleChangeEmail={handleChangeEmail}
                  />
                </div>
                <div className='contacts__item'>
                  <Schedule
                    scheduleHeading={scheduleHeading}
                    schedule={schedule}
                    handleChangeScheduleHeading={handleChangeScheduleHeading}
                    handleChangeSchedule={handleChangeSchedule}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default ContactInfo
