import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { InnerBlocks } from '@wordpress/block-editor'
import SectionHeading from '../components/section-heading'
import IconsList from './components/icons-list'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.setAttributes = props.setAttributes
    this.template = [['core/paragraph', { placeholder: 'Введите текст..' }]]
  }

  render () {
    const { className, isSelected, attributes } = this.props
    const {
      heading,
      list
    } = attributes

    return (
      <>
        <div className={className}>
          <div className='block-title'>{__('Блок с описание преимуществ', 'tiger')}</div>
          <section className='section section-advantages'>
            <div className='container'>
              <SectionHeading
                heading={heading}
                handleChangeHeading={heading => this.setAttributes({ heading })}
              />
              <div className='section__inner'>
                <div className='section__aside'>
                  <div className='subheading-list'>
                    <IconsList
                      list={list}
                      handleChangeList={list => this.setAttributes({ list })}
                      isSelected={isSelected}
                    />
                  </div>
                </div>
                <div className='section__content'>
                  <article className='article'>
                    <div className='article__content'>
                      <InnerBlocks
                        orientation='vertical'
                        allowedBlocks={['core/paragraph', 'core/list', 'core/heading']}
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
