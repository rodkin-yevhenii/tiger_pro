import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import { Button, PanelBody, PanelRow, TextControl, ToggleControl } from '@wordpress/components'
import ContactInfo from './components/info-block'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.handleLoadSiteData = this.handleLoadSiteData.bind(this)
    this.state = { loadDefaultText: __('Значения по умолчанию', 'tiger') }

    this.setAttributes = props.setAttributes
  }

  handleLoadSiteData () {
    this.setState({ loadDefaultText: __('Загрузка...', 'tiger') })

    // eslint-disable-next-line no-undef
    fetch('/wp-json/tiger/v1/contacts')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setAttributes({
          phone: data.phone,
          email: data.email,
          telegram: data.messengers.telegram,
          viber: data.messengers.viber,
          whatsapp: data.messengers.whatsapp,
          schedule: data.schedule,
          address: data.address
        })

        this.setState({ loadDefaultText: __('Значения по умолчанию', 'tiger') })
      })
  }

  render () {
    const { className, attributes } = this.props
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
    } = attributes

    return (
      <>
        <div className={'contacts ' + className}>
          <div className='block-title'>{__('Контактная ниформация', 'tiger')}</div>
          <InspectorControls>
            <PanelBody
              label={__('Настройки нтактной формы', 'tiger')}
            >
              <PanelRow>
                <ToggleControl
                  label='Фоновое изображение'
                  checked={isShowBg}
                  onChange={() => this.setAttributes({ isShowBg: !isShowBg })}
                />
              </PanelRow>
              <PanelRow>
                <div>
                  <div>
                    <TextControl
                      label={__('Telegram', 'tiger')}
                      value={telegram}
                      onChange={telegram => this.setAttributes({ telegram })}
                    />
                  </div>
                  <div>
                    <TextControl
                      label={__('Viber', 'tiger')}
                      value={viber}
                      onChange={viber => this.setAttributes({ viber })}
                    />
                  </div>
                  <div>
                    <TextControl
                      label={__('Whatsapp', 'tiger')}
                      value={whatsapp}
                      onChange={whatsapp => this.setAttributes({ whatsapp })}
                    />
                  </div>
                </div>
              </PanelRow>
              <PanelRow>
                <Button
                  label={__('Значения будут загружены из настроек темы.', 'tiger')}
                  className='js-load-default-contacts'
                  style={{ margin: 'auto' }}
                  isSecondary
                  text={this.state.loadDefaultText}
                  onClick={this.handleLoadSiteData}
                />
              </PanelRow>
            </PanelBody>
          </InspectorControls>
          <ContactInfo
            isShowBg={isShowBg}
            mainHeading={mainHeading}
            handleChangeMainHeading={mainHeading => this.setAttributes({ mainHeading })}
            addressHeading={addressHeading}
            handleChangeAddressHeading={addressHeading => this.setAttributes({ addressHeading })}
            phoneHeading={phoneHeading}
            handleChangePhoneHeading={phoneHeading => this.setAttributes({ phoneHeading })}
            emailHeading={emailHeading}
            handleChangeEmailHeading={emailHeading => this.setAttributes({ emailHeading })}
            scheduleHeading={scheduleHeading}
            handleChangeScheduleHeading={scheduleHeading => this.setAttributes({ scheduleHeading })}
            phone={phone}
            handleChangePhone={phone => this.setAttributes({ phone })}
            email={email}
            handleChangeEmail={email => this.setAttributes({ email })}
            address={address}
            handleChangeAddress={address => this.setAttributes({ address })}
            schedule={schedule}
            handleChangeSchedule={schedule => this.setAttributes({ schedule })}
            telegram={telegram}
            viber={viber}
            whatsapp={whatsapp}
          />
        </div>
      </>
    )
  }
}
