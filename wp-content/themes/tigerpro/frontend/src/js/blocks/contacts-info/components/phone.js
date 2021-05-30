import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import Messagers from '../../components/messangers/messagers'

export default class Phone extends Component {
  render () {
    const {
      phoneHeading,
      phone,
      handleChangePhoneHeading,
      handleChangePhone,
      telegram,
      viber,
      whatsapp
    } = this.props

    return (
      <>
        <RichText
          tagName='h4'
          className='subheading subheading--mb-md'
          value={phoneHeading}
          placeholder={__('Заголовок', 'tiger')}
          onChange={phoneHeading => handleChangePhoneHeading(phoneHeading)}
        />
        <div className='contacts__item-content'>
          <RichText
            tagName='span'
            className='link link--secondary'
            value={phone}
            placeholder={__('Введите телефон', 'tiger')}
            onChange={phone => handleChangePhone(phone)}
          />
        </div>
        <Messagers
          viber={viber}
          telegram={telegram}
          whatsapp={whatsapp}
        />
      </>
    )
  }
}
