import { Component } from '@wordpress/element'
import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

export default class Item extends Component {
  constructor (props) {
    super(props)

    this.state = {
      icons: [
        {
          name: 'calendar',
          label: 'Календарь'
        },
        {
          name: 'camera',
          label: 'Камера'
        },
        {
          name: 'certificate',
          label: 'Сертефикат'
        },
        {
          name: 'clock',
          label: 'Часы'
        },
        {
          name: 'credit-cards',
          label: 'Кредитка'
        },
        {
          name: 'docs',
          label: 'Документы'
        },
        {
          name: 'search',
          label: 'Поиск'
        },
        {
          name: 'shopping-cart',
          label: 'Корзина'
        },
        {
          name: 'phone',
          label: 'Телефон'
        },
        {
          name: 'mail',
          label: 'Письмо'
        },
        {
          name: 'info',
          label: 'Инфо'
        }
      ]
    }
  }

  render () {
    const {
      iconName,
      onChangeIcon,
      isSelected
    } = this.props

    return (
      <>
        {!isSelected &&
          <svg className='icon'>
            <use xlinkHref={'/wp-content/themes/tigerpro/frontend/dist/img/icons-sprite.svg#icon-' + iconName} />
          </svg>}
        {!!isSelected &&
          <div className='select-icon'>
            <SelectControl
              value={iconName}
              options={this.state.icons.map(item => {
                return (
                  { value: item.name, label: item.label }
                )
              })}
              onChange={(iconName) => onChangeIcon(iconName)}
            />
          </div>}
      </>
    )
  }
}
