import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/block-editor'

export default class SectionHeading extends Component {
  render () {
    const {
      heading,
      handleChangeHeading
    } = this.props

    return (
      <h2 className='heading heading--md heading--primary heading--mb-lg'>
        <RichText
          tagName='span'
          className='heading__inner'
          placeholder={__('Заголовок', 'Tiger')}
          value={heading}
          onChange={heading => handleChangeHeading(heading)}
        />
      </h2>
    )
  }
}
