import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { InnerBlocks } from '@wordpress/block-editor'
import Image from '../components/image'
import SectionHeading from '../components/section-heading'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.handleChangeImg = this.handleChangeImg.bind(this)
    this.handleRemoveImg = this.handleRemoveImg.bind(this)

    this.setAttributes = props.setAttributes
    this.template = [['core/paragraph', { placeholder: 'Введите текст..' }]]
  }

  handleChangeImg (img) {
    this.setAttributes({
      imgId: parseInt(img.id),
      imgUrl: img.sizes.full.url
    })
  }

  handleRemoveImg () {
    this.setAttributes({
      imgId: 0,
      imgUrl: ''
    })
  }

  render () {
    const { className, attributes } = this.props
    const {
      heading,
      imgId,
      imgUrl
    } = attributes

    return (
      <>
        <div className={className}>
          <div className='block-title'>{__('Блок с изображение слева и контентом справа', 'tiger')}</div>
          <section className='section section-faq'>
            <div className='section__overlay section__overlay--left u-tablet-hidden'><span /></div>
            <div className='section__overlay section__overlay--right'><span /></div>
            <div className='container'>
              <SectionHeading
                heading={heading}
                handleChangeHeading={heading => this.setAttributes({ heading })}
              />
              <div className='section__inner'>
                <div className='section__aside'>
                  <Image
                    imgId={imgId}
                    imgUrl={imgUrl}
                    selectImgText={__('Рекомендуемая ширина изображения 448px', 'tiger')}
                    onChangeImg={this.handleChangeImg}
                    onRemoveImg={this.handleRemoveImg}
                  />
                </div>
                <div className='section__content'>
                  <article className='article'>
                    <div className='article__content'>
                      <InnerBlocks
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
