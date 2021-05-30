import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/block-editor'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.setAttributes = props.setAttributes
  }

  render () {
    const { className, attributes } = this.props
    const {
      siteName,
      description,
      bottomText
    } = attributes

    return (
      <>
        <div className={className}>
          <div className='block-title'>{__('Заголовок страницы', 'tiger')}</div>
          <div className='head head--secondary'>
            <div className='head__content'>
              <div className='container'>
                <h2 className='heading heading--md heading--center heading--primary'>
                  <RichText
                    value={siteName}
                    placeholder='ТАЙГЕР ПРО'
                    onChange={siteName => this.setAttributes({ siteName })}
                  />
                  {' - '}
                  <br className='u-linebreak-mobile' />
                  <RichText
                    value={description}
                    placeholder='НАДЕЖНЫЙ ПАРТНЕР'
                    onChange={description => this.setAttributes({ description })}
                  />
                </h2>
                <RichText
                  tagName='div'
                  className='subheading subheading--center'
                  value={bottomText}
                  placeholder='В РЕШЕНИИ ЗЕМЕЛЬНЫХ ВОПРОСОВ'
                  onChange={bottomText => this.setAttributes({ bottomText })}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
