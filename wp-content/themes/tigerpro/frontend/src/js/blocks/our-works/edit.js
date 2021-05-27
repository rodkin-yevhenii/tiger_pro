import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/block-editor'
import SliderItem from './components/slider-item'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.handleItemText = this.handleItemText.bind(this)
    this.handleChangeImg = this.handleChangeImg.bind(this)
    this.handleRemoveImg = this.handleRemoveImg.bind(this)
    this.handleAddNewItem = this.handleAddNewItem.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)

    this.setAttributes = props.setAttributes
    this.state = props.attributes
  }

  handleAddNewItem () {
    const { items } = this.props.attributes
    const newItems = [
      ...items,
      {
        imgId: 0,
        imgUrl: '',
        text: ''
      }
    ]

    this.setAttributes({
      items: newItems
    })
  }

  handleRemoveItem (index) {
    const { items } = this.props.attributes
    const newItems = [...items]

    newItems.splice(index, 1)

    this.setAttributes({
      items: newItems
    })
  }

  handleChangeImg (img, index) {
    const { items } = this.props.attributes
    const newItems = [...items]

    newItems[index].imgId = parseInt(img.id)
    newItems[index].imgUrl = img.sizes.full.url

    this.setAttributes({
      items: newItems
    })
  }

  handleRemoveImg (index) {
    const { items } = this.props.attributes
    const newItems = [...items]

    newItems[index].imgId = 0
    newItems[index].imgUrl = ''

    this.setAttributes({
      items: newItems
    })
  }

  handleItemText (text, i) {
    const { items } = this.props.attributes
    const newItems = [...items]

    newItems[i].text = text

    this.setAttributes({
      items: newItems
    })
  }

  render () {
    const { className, attributes } = this.props
    const { heading, items } = attributes

    return (
      <>
        <div className={'our-works ' + className}>
          <div className='block-title'>{__('Наши работы (Слайдер)', 'tiger')}</div>
          <section className='section section-projects'>
            <div className='container'>
              <h2 className='heading heading--md heading--primary heading--mb-lg'>
                <RichText
                  tagName='span'
                  className='heading__inner'
                  value={heading}
                  onChange={heading => this.setAttributes({ heading })}
                />
              </h2>
              <div className='section__slider'>
                <div className='slider__wrapper'>
                  {items.map((item, index) => {
                    return (
                      <SliderItem
                        key={index}
                        index={index}
                        item={item}
                        onChangeImg={this.handleChangeImg}
                        onRemoveImg={this.handleRemoveImg}
                        onRemoveItem={this.handleRemoveItem}
                        onHandleItemTextChange={this.handleItemText}
                      />
                    )
                  })}
                </div>
              </div>
              <div className='slider__add-item'>
                <button
                  className='btn btn--large'
                  onClick={this.handleAddNewItem}
                >
                  {__('Add new slide', 'tiger')}
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
