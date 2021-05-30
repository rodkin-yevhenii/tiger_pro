import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

export default class Address extends Component {
  render () {
    const {
      addressHeading,
      address,
      handleChangeAddressHeading,
      handleChangeAddress
    } = this.props

    return (
      <>
        <RichText
          tagName='h4'
          className='subheading subheading--mb-md'
          value={addressHeading}
          placeholder={__('Заголовок', 'tiger')}
          onChange={addressHeading => handleChangeAddressHeading(addressHeading)}
        />
        <div className='contacts__item-content'>
          <RichText
            tagName='span'
            className='link link--secondary'
            value={address}
            placeholder={__('Введите юр. аддрес', 'tiger')}
            onChange={address => handleChangeAddress(address)}
          />
        </div>
      </>
    )
  }
}
