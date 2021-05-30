import { Component } from '@wordpress/element'

export default class Telegram extends Component {
  render () {
    const {
      telegram
    } = this.props

    return (
      !!telegram &&
        <span className='icon'>
          <img src='/wp-content/themes/tigerpro/frontend/src/img/icons/telegram.svg' alt='Telegram' />
        </span>
    )
  }
}
