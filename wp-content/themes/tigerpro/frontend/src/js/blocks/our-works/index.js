import './editor.scss'
import edit from './edit'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

const attributes = {
  heading: {
    type: 'string',
    default: __('Наши работы', 'tiger')
  },
  items: {
    type: 'array',
    default: [],
    query: [
      {
        imgId: {
          type: 'integer',
          default: 0
        },
        imgUrl: {
          type: 'string',
          default: ''
        },
        text: {
          type: 'string',
          default: ''
        }
      }
    ]
  }
}

registerBlockType('tiger-pro/our-works', {
  title: __('Наши Работы', 'tiger'),
  description: __('Блок со слайдером наших работ', 'tiger'),
  category: 'tiger',
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#000000'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
    </svg>
  ),
  keywords: [
    __('Работы', 'tiger'),
    __('Наши работы', 'tiger'),
    __('Слайдер', 'tiger'),
    __('Слайдер наши работы', 'tiger')
  ],
  attributes,
  edit,
  save () {
    return null
  }
})
