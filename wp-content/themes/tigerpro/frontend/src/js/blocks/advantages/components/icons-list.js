import { Component } from '@wordpress/element'
import Item from './list-item'
import { Button } from '@wordpress/components'

export default class IconsList extends Component {
  constructor (props) {
    super(props)

    this.handleChangeListItem = this.handleChangeListItem.bind(this)
  }

  handleChangeListItem (item, index) {
    const { list, handleChangeList } = this.props
    const newList = [...list]

    newList[index] = item
    handleChangeList(newList)
  }

  handleAddListItem () {
    const { list, handleChangeList } = this.props
    const newList = [...list, { text: '', iconName: '' }]

    handleChangeList(newList)
  }

  handleRemoveListItem (index) {
    const { list, handleChangeList } = this.props
    const newList = [...list]
    newList.splice(index, 1)

    handleChangeList(newList)
  }

  render () {
    const {
      list,
      isSelected
    } = this.props

    return (
      <>
        {list.map((item, index) => {
          return (
            <p key={index} className='subheading subheading--sm'>
              {isSelected &&
                <Button
                  className='remove-item'
                  onClick={() => this.handleRemoveListItem(index)}
                  text='X'
                />}
              <Item
                text={item.text}
                iconName={item.iconName}
                index={index}
                onChangeItem={this.handleChangeListItem}
                isSelected={isSelected}
              />
            </p>
          )
        })}
        {isSelected &&
          <Button
            className='add-item'
            onClick={() => this.handleAddListItem()}
            text='Добавить'
          />}
      </>
    )
  }
}
