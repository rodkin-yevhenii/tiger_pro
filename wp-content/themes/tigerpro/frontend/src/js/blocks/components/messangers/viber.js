import { Component } from '@wordpress/element'

export default class Viber extends Component {
  render () {
    const {
      viber
    } = this.props

    return (
      !!viber &&
        <span className='icon'>
          <img src='/wp-content/themes/tigerpro/frontend/src/img/icons/viber.svg' alt='Viber' />
        </span>
    )
  }
}
