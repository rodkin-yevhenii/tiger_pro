import { Component } from '@wordpress/element'

export default class Whatsapp extends Component {
  render () {
    const {
      whatsapp
    } = this.props

    return (
      !!whatsapp &&
        <span className='icon'>
          <img src='/wp-content/themes/tigerpro/frontend/src/img/icons/whatsapp.svg' alt='Whatsapp' />
        </span>
    )
  }
}
