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
  imgId: {
    type: 'integer',
    default: 0
  },
  imgUrl: {
    type: 'string',
    default: ''
  }
}

registerBlockType('tiger-pro/image-left', {
  title: __('Секция с большим изображением и контентом', 'tiger'),
  description: __('Секция с большим изображением слева и контентом справа', 'tiger'),
  category: 'tiger',
  icon: 'align-pull-left',
  keywords: [
    __('Секция с большим изображением и контентом', 'tiger'),
    __('Секция с большим изображением слева', 'tiger'),
    __('Секция с большим изображением', 'tiger')
  ],
  attributes,
  edit,
  save
})
