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
  items: {
    type: 'array',
    default: [],
    query: [
      {
        id: {
          type: 'integer',
          default: 0
        },
        fullSizeUrl: {
          type: 'string',
          default: 0
        },
        sliderSizeUrl: {
          type: 'string',
          default: 0
        }
      }
    ]
  }
}

registerBlockType('tiger-pro/slider', {
  title: __('Наши Работы', 'tiger'),
  description: __('Блок со слайдером наших работ', 'tiger'),
  category: 'tiger',
  icon: 'tickets-alt',
  keywords: [
    __('Слайдер', 'tiger'),
    __('Слайнер с текстом', 'tiger'),
    __('Слайдер с текстом слева', 'tiger')
  ],
  attributes,
  edit,
  save
})
