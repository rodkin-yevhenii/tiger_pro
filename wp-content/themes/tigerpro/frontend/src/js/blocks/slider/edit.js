import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { Slider } from '../components/slider'
import { InnerBlocks } from '@wordpress/block-editor'
import SectionHeading from '../components/section-heading'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.setAttributes = props.setAttributes
  }

  render () {
    const { className, isSelected, attributes } = this.props
    const { heading, items } = attributes

    return (
      <>
        <div className={'our-works ' + className}>
          <div className='block-title'>{__('Слайдер с доп текстом слева', 'tiger')}</div>
          <section className='section section-documents'>
            <div className='container'>
              <SectionHeading
                heading={heading}
                handleChangeHeading={heading => this.setAttributes({ heading })}
              />
              <div className='section__inner section__inner--desktop-sm-full'>
                <div className='section__aside section__aside--desktop-sm-full'>
                  <article className='article'>
                    <div className='article__content'>
                      <InnerBlocks
                        orientation='vertical'
                        allowedBlocks={['core/paragraph', 'core/list', 'core/heading']}
                      />
                    </div>
                  </article>
                </div>
                <Slider
                  items={items}
                  onChangeItems={items => this.setAttributes({ items })}
                  isSelected={isSelected}
                />
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
