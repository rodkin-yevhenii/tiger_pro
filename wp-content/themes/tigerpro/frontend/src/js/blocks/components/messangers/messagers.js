import { Component } from '@wordpress/element'
import Viber from './viber'
import Telegram from './telegram'
import Whatsapp from './whatsapp'

export default class Messagers extends Component {
  render () {
    const {
      viber,
      telegram,
      whatsapp
    } = this.props

    return (
      <div className='socials__list'>
        <ul>
          {!!viber &&
            <li>
              <Viber
                viber={viber}
              />
            </li>}
          {!!telegram &&
            <li>
              <Telegram
                telegram={telegram}
              />
            </li>}
          {!!whatsapp &&
            <li>
              <Whatsapp
                whatsapp={whatsapp}
              />
            </li>}
        </ul>
      </div>
    )
  }
}
