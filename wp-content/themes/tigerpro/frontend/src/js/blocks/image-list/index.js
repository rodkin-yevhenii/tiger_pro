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
        }
      }
    ]
  },
  imgId: {
    type: 'integer',
    default: 0
  },
  imgUrl: {
    type: 'string',
    default: ''
  }
}

registerBlockType('tiger-pro/image-list', {
  title: __('Секция с изображением и списком', 'tiger'),
  description: __('Секция с изображением слева и списком справа', 'tiger'),
  category: 'tiger',
  icon: 'align-pull-left',
  keywords: [
    __('Секция с изображением и списком', 'tiger'),
    __('Секция с изображением слева', 'tiger'),
    __('Секция с изображением', 'tiger')
  ],
  attributes,
  edit,
  save
})
