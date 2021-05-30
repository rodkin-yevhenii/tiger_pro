import edit from './edit'
import save from './save'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

const attributes = {
  siteName: {
    type: 'string',
    default: __('ТАЙГЕР ПРО', 'tiger')
  },
  description: {
    type: 'string',
    default: __('НАДЕЖНЫЙ ПАРТНЕР', 'tiger')
  },
  bottomText: {
    type: 'string',
    default: __('В РЕШЕНИИ ЗЕМЕЛЬНЫХ ВОПРОСОВ', 'tiger')
  }
}

registerBlockType('tiger-pro/page-heading', {
  title: __('Заголовок страницы', 'tiger'),
  description: __('Главный заголовок страницы', 'tiger'),
  category: 'tiger',
  icon: 'welcome-widgets-menus',
  keywords: [
    __('Заголовок', 'tiger'),
    __('Заголовок страницы', 'tiger'),
    __('Главный заголовок страницы', 'tiger')
  ],
  attributes,
  edit,
  save
})
