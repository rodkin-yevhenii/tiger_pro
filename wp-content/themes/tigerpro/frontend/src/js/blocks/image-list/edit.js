import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import Image from '../components/image'
import SectionHeading from '../components/section-heading'
import { RichText } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.handleChangeImg = this.handleChangeImg.bind(this)
    this.handleRemoveImg = this.handleRemoveImg.bind(this)

    this.setAttributes = props.setAttributes
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

  handleChangeList (text, index) {
    const { list } = this.props.attributes
    const newList = [...list]

    newList[index] = text
    this.setAttributes({ list: newList })
  }

  handleAddListItem () {
    const { list } = this.props.attributes
    const newList = [...list, { text: '' }]

    this.setAttributes({ list: newList })
  }

  handleRemoveListItem (index) {
    const { list } = this.props.attributes
    const newList = [...list]
    newList.splice(index, 1)

    this.setAttributes({ list: newList })
  }

  render () {
    const { className, isSelected, attributes } = this.props
    const {
      heading,
      list,
      imgId,
      imgUrl
    } = attributes

    return (
      <>
        <div className={className}>
          <div className='block-title'>{__('Блок с изображение слева и списком справа', 'tiger')}</div>
          <section className='section section-about'>
            <div className='section__overlay section__overlay--left u-tablet-hidden u-tablet-hidden'><span /></div>
            <div className='section__figure section__figure--right'><span /></div>
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
                    classNames='img--centered'
                    selectImgText={__('Рекомендуемая ширина изображения 448px', 'tiger')}
                    onChangeImg={this.handleChangeImg}
                    onRemoveImg={this.handleRemoveImg}
                  />
                </div>
                <div className='section__content'>
                  {list.length &&
                    <ul className='list list--ordered'>
                      {list.map((item, index) => {
                        return (
                          <li key={index}>
                            {isSelected && (
                              <Button className='remove-item' onClick={() => this.handleRemoveListItem(index)}>
                                X
                              </Button>
                            )}
                            <RichText
                              tagName='span'
                              placeholder={__('Введите текст', 'tiger')}
                              value={item}
                              onChange={text => this.handleChangeList(text, index)}
                            />
                          </li>
                        )
                      })}
                    </ul>}
                  {isSelected && (
                    <Button className='add-item' onClick={() => this.handleAddListItem()}>
                      {__('Добавить Текст', 'tiger')}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
