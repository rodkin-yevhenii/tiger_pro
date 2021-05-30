import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'

export default class Save extends Component {
  render () {
    const {
      siteName,
      description,
      bottomText
    } = this.props.attributes

    return (
      <div className='head head--secondary'>
        <div className='head__content'>
          <div className='container'>
            <h2 className='heading heading--md heading--center heading--primary'>
              <RichText.Content value={siteName} />
              {' - '}
              <br className='u-linebreak-mobile' />
              <RichText.Content value={description} />
            </h2>
            <RichText.Content
              tagName='div'
              className='subheading subheading--center'
              value={bottomText}
            />
          </div>
        </div>
      </div>
    )
  }
}
