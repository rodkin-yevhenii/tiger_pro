import { Component } from '@wordpress/element'
import { RichText, InnerBlocks } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

class NoNumericDefinition extends Component {
  render() {
    const { context, title, changeTitleCallback } = this.props
    const isEdit = context === 'edit'

    return (
      <>
        <section className='section'>
          <div className='container'>
            <div className='section__inner'>
              <div className='section__aside section__aside--secondary'>
                <div className='section__aside-overlay'>
                  <span />
                </div>
                <h2 className='heading heading--md heading--primary heading--mb-lg'>
                  {isEdit ? (
                    <RichText
                      tagName='span'
                      className='heading__inner heading__inner--sm'
                      placeholder={__('Заголовок', 'tiger')}
                      value={title}
                      onChange={value => changeTitleCallback(value)}
                    />
                  ) : (
                    <span className='heading__inner heading__inner--sm'>
                      {title}
                    </span>
                  )}
                </h2>
              </div>
              <div className='section__content'>
                <article className='article'>
                  <div className='article__content section__content--secondary'>
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

export default NoNumericDefinition
