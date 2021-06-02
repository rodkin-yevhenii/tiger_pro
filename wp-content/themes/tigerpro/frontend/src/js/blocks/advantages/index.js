import './editor.scss'
import edit from './edit'
import save from './save'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

const attributes = {
  heading: {
    type: 'string',
    default: ''
  },
  list: {
    type: 'array',
    default: [],
    query: [
      {
        text: {
          type: 'string',
          default: ''
        },
        iconName: {
          type: 'string',
          default: ''
        }
      }
    ]
  }
}

registerBlockType('tiger-pro/advantages', {
  title: __('Наши преимущества', 'tiger'),
  description: __('Секция "Наши преимущества"', 'tiger'),
  category: 'tiger',
  icon: 'superhero-alt',
  keywords: [
    __('Преимущества', 'tiger'),
    __('Наши преимущества', 'tiger'),
    __('Секция наши преимущества', 'tiger')
  ],
  attributes,
  edit,
  save
})
