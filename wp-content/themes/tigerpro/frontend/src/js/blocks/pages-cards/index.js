import './editor.scss'
import edit from './edit'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

const attributes = {
  cards: {
    type: 'array',
    default: [],
    query: [
      {
        id: {
          type: 'integer',
          default: 0
        }
      }
    ]
  }
}

registerBlockType('tiger-pro/pages-cards', {
  title: __('Карточнки страниц', 'tiger'),
  description: __('3 карточки страниц с изображениями', 'tiger'),
  category: 'tiger',
  icon: 'layout',
  keywords: [
    __('Карточки', 'tiger'),
    __('Карточки страниц', 'tiger'),
    __('Блок страниц', 'tiger')
  ],
  attributes,
  edit,
  save () {
    return null
  }
})
