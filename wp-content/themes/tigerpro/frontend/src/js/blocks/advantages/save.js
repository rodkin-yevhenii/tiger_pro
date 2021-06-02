import { Component, createElement } from '@wordpress/element'
import { InnerBlocks } from '@wordpress/block-editor'

export default class Save extends Component {
  render () {
    const {
      heading,
      list
    } = this.props.attributes

    return (
      <>
        <section className='section section-about'>
          <div className='section__overlay section__overlay--left u-tablet-hidden u-tablet-hidden'><span /></div>
          <div className='section__figure section__figure--right'><span /></div>
          <div className='container'>
            <h2 className='heading heading--md heading--primary heading--mb-lg'>
              <span className='heading__inner'>{heading}</span>
            </h2>
            <div className='section__inner'>
              <div className='section__aside'>
                <div className='subheading-list'>
                  {!!list.length && list.map((item, index) => {
                    const xref = createElement('use', {
                      'xlink:href': '/wp-content/themes/tigerpro/frontend/dist/img/icons-sprite.svg#icon-' + item.iconName
                    })

                    return (
                      <p key={index} className='subheading subheading--sm'>
                        <span className='subheading__icon'>
                          <svg className='icon'>
                            {xref}
                          </svg>
                        </span>
                        <span className='subheading__content'>
                          {item.text}
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className='section__content'>
                <article className='article'>
                  <div className='article__content'>
                    <InnerBlocks.Content />
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
