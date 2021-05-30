import './editor.scss'
import edit from './edit'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

const attributes = {
  isShowBg: {
    type: 'Boolean',
    default: true
  },
  mainHeading: {
    type: 'string',
    default: __('Контакты', 'tiger')
  },
  addressHeading: {
    type: 'string',
    default: __('Юридический адрес', 'tiger')
  },
  phoneHeading: {
    type: 'string',
    default: __('Tелефон', 'tiger')
  },
  emailHeading: {
    type: 'string',
    default: __('Почта', 'tiger')
  },
  scheduleHeading: {
    type: 'string',
    default: __('Время работы', 'tiger')
  },
  phone: {
    type: 'string',
    default: ''
  },
  email: {
    type: 'string',
    default: ''
  },
  telegram: {
    type: 'string',
    default: ''
  },
  viber: {
    type: 'string',
    default: ''
  },
  whatsapp: {
    type: 'string',
    default: ''
  },
  schedule: {
    type: 'string',
    default: ''
  },
  address: {
    type: 'string',
    default: ''
  }
}

registerBlockType('tiger-pro/contact-info', {
  title: __('Контактная Информация', 'tiger'),
  description: __('Контактная Информация', 'tiger'),
  category: 'tiger',
  icon: (
    <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
    </svg>
  ),
  keywords: [
    __('Контыкты', 'tiger'),
    __('Контактная информация', 'tiger')
  ],
  attributes,
  edit,
  save () {
    return null
  }
})
