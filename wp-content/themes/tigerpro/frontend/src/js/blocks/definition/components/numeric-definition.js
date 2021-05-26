import { Component } from '@wordpress/element'
import { RichText, InnerBlocks } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

class NumericDefinition extends Component {
  render() {
    const { context, number, title, changeTitleCallback } = this.props
    const isEdit = context === 'edit'

    return (
      <>
        <section className='section section-item'>
          <div className='container'>
            <div className='section__inner'>
              <div className='section__aside section__aside--secondary'>
                <div className='section__head'>
                  <div className='section__head-overlay'>
                    <span />
                  </div>
                  <div className='section__head-number'>{number}</div>
                  <div className='section__head-title'>
                    <h2 className='subheading'>
                      {isEdit ? (
                        <RichText
                          tagName='span'
                          className='subheading__inner'
                          placeholder={__('Заголовок', 'tiger')}
                          value={title}
                          onChange={value => changeTitleCallback(value)}
                        />
                      ) : (
                        <span className='subheading__inner'>{title}</span>
                      )}
                    </h2>
                  </div>
                </div>
              </div>
              <div className='section__content section__content--secondary'>
                <article className='article'>
                  <div className='article__content'>
                    {isEdit ? <InnerBlocks /> : <InnerBlocks.Content />}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default NumericDefinition
