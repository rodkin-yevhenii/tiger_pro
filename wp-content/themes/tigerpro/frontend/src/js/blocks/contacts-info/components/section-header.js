import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

class SectionHeader extends Component {
  render () {
    const {
      mainHeading,
      handleChangeMainHeading
    } = this.props

    return (
      <>
        <div className='head'>
          <div className='head__content'>
            <div className='container'>
              <RichText
                tagName='h1'
                className='heading heading--lg heading--center heading--primary'
                value={mainHeading}
                placeholder={__('Заголовок', 'tiger')}
                onChange={mainHeading => handleChangeMainHeading(mainHeading)}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SectionHeader
