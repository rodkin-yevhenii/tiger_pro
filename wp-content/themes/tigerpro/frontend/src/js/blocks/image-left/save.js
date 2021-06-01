import { Component } from '@wordpress/element'
import { InnerBlocks } from '@wordpress/block-editor'

export default class Save extends Component {
  render () {
    const {
      heading,
      imgUrl
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
                <div className='img img--centered'>
                  <img src={imgUrl} alt='image' />
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
