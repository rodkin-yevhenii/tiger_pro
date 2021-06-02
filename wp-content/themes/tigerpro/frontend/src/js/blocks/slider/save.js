import { Component, createElement } from '@wordpress/element'
import { InnerBlocks } from '@wordpress/block-editor'

export default class Save extends Component {
  render () {
    const {
      heading,
      items
    } = this.props.attributes

    const left = createElement('use', {
      'xlink:href': '/wp-content/themes/tigerpro/frontend/dist/img/icons-sprite.svg#icon-arrow-left'
    })
    const right = createElement('use', {
      'xlink:href': '/wp-content/themes/tigerpro/frontend/dist/img/icons-sprite.svg#icon-arrow-right'
    })

    return (
      <>
        <section className='section section-documents'>
          <div className='container'>
            <h2 className='heading heading--md heading--primary heading--mb-lg'>
              <span className='heading__inner'>{heading}</span>
            </h2>
            <div className='section__inner section__inner--desktop-sm-full'>
              <div className='section__aside section__aside--desktop-sm-full'>
                <article className='article'>
                  <div className='article__content'>
                    <InnerBlocks.Content />
                  </div>
                </article>
              </div>
              <div className='section__content section__slider section__content--desktop-sm-full'>
                <div className='section__controls'>
                  <div className='section__controls-group'>
                    <span className='btn btn--secondary btn--square btn-arrow btn-arrow--left'>
                      <svg className='icon'>
                        {left}
                      </svg>
                    </span>
                    <span className='btn btn--secondary btn--square btn-arrow btn-arrow--right'>
                      <svg className='icon'>
                        {right}
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='slider gallery'>
                  {!!items.length && items.map((item, index) => {
                    const xref = createElement('use', {
                      'xlink:href': '/wp-content/themes/tigerpro/frontend/dist/img/icons-sprite.svg#icon-search-plus'
                    })

                    return (
                      <div key={index} className='slider__item'>
                        <a
                          href={item.fullSizeUrl}
                          className='card card--primary card--image'
                        >
                          <div className='card__inner'>
                            <div className='card__bg'>
                              <img src={item.sliderSizeUrl} alt='certificate' />
                            </div>
                            <div className='card__overlay'>
                              <div className='card__overlay-inner'>
                                <div className='card__icon'>
                                  <svg className='icon'>
                                    {xref}
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
