import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

export default class Email extends Component {
  render () {
    const {
      emailHeading,
      email,
      handleChangeEmailHeading,
      handleChangeEmail
    } = this.props

    return (
      <>
        <RichText
          tagName='h4'
          className='subheading subheading--mb-md'
          value={emailHeading}
          placeholder={__('Заголовок', 'tiger')}
          onChange={emailHeading => handleChangeEmailHeading(emailHeading)}
        />
        <div className='contacts__item-content'>
          <RichText
            tagName='span'
            className='link link--secondary'
            value={email}
            placeholder={__('Введите email', 'tiger')}
            onChange={email => handleChangeEmail(email)}
          />
        </div>
      </>
    )
  }
}
