import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/block-editor'
import Icon from '../../components/Icon'

export default class Item extends Component {
  constructor (props) {
    super(props)

    this.handleChangeIcon = this.handleChangeIcon.bind(this)
  }

  handleChangeText (text) {
    const { iconName, index, onChangeItem } = this.props

    onChangeItem({ text, iconName }, index)
  }

  handleChangeIcon (iconName) {
    const { text, index, onChangeItem } = this.props

    onChangeItem({ text, iconName }, index)
  }

  render () {
    const {
      text,
      iconName,
      isSelected
    } = this.props

    return (
      <>
        <span className='subheading__icon'>
          <Icon
            iconName={iconName}
            onChangeIcon={this.handleChangeIcon}
            isSelected={isSelected}
          />
        </span>
        <span className='subheading__content'>
          <RichText
            tagName='span'
            className='subheading__content'
            placeholder={__('Введите текст', 'tiger')}
            value={text}
            onChange={text => this.handleChangeText(text)}
          />
        </span>
      </>
    )
  }
}
