import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import Item from './item'
import { Button } from '@wordpress/components'

export class Slider extends Component {
  constructor (props) {
    super(props)

    this.handleChangeItem = this.handleChangeItem.bind(this)
  }

  handleChangeItem (item, index) {
    const { items, onChangeItems } = this.props
    const newItems = [...items]

    newItems[index] = item
    onChangeItems(newItems)
  }

  handleAddItem () {
    const { items, onChangeItems } = this.props
    const newItems = [
      ...items,
      {
        id: 0,
        fullSizeUrl: '',
        sliderSizeUrl: ''
      }
    ]

    onChangeItems(newItems)
  }

  handleRemoveItem (index) {
    const { items, onChangeItems } = this.props
    const newItems = [...items]
    newItems.splice(index, 1)

    onChangeItems(newItems)
  }

  render () {
    const {
      items,
      isSelected
    } = this.props

    return (
      <>
        <div className='section__content section__slider section__content--desktop-sm-full'>
          <div className='slider gallery'>
            {!!items && !!items.length && items.map((item, index) => {
              return (
                <div key={index} className='slider__item'>
                  <Item
                    item={item}
                    index={index}
                    onChangeItem={this.handleChangeItem}
                    isSelected={isSelected}
                  />
                  {!!item.id &&
                    <Button
                      className='remove-slide'
                      onClick={() => this.handleRemoveItem()}
                      isDestructive
                      text={__('Удалить слайд', 'tiger')}
                    />}
                </div>
              )
            })}
          </div>
          <Button
            className='add-item'
            onClick={() => this.handleAddItem()}
            text='Добавить'
          />
        </div>
      </>
    )
  }
}
