import './editor.scss'
import edit from './edit'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

const attributes = {
  isShowBg: {
    type: 'Boolean',
    default: true
  },
  formHeading: {
    type: 'string',
    default: __('Закажите бесплатную консультацию, и мы ответим на все Ваши вопросы!', 'tiger')
  },
  contactsHeading: {
    type: 'string',
    default: __('Бесплатная консультация', 'tiger')
  },
  btnText: {
    type: 'string',
    default: __('Получить консультацию', 'tiger')
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
  }
}

registerBlockType('tiger-pro/contacts', {
  title: __('Контактная форма', 'tiger'),
  description: __('Контактная форма с доп. информацией для связи', 'tiger'),
  category: 'tiger',
  icon: (
    <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        d='M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z'
      />
    </svg>
  ),
  keywords: [
    __('Контыкты', 'tiger'),
    __('Форма', 'tiger'),
    __('Контактная форма', 'tiger'),
    __('Обратная связь', 'tiger')
  ],
  attributes,
  edit,
  save () {
    return null
  }
})
