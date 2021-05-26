import './editor.scss'
import edit from './edit'
import save from './save'
import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

const attributes = {
  isNumeric: {
    type: 'bool',
    default: true
  },
  number: {
    type: 'integer',
    default: 0
  },
  title: {
    type: 'string',
    default: ''
  }
}

registerBlockType('tiger-pro/definition', {
  title: __('Определения', 'tiger'),
  description: __(
    'Блок с названием и его определением. Может иметь порядковый номер.',
    'tiger'
  ),
  category: 'layout',
  icon: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#000000'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z' />
    </svg>
  ),
  keywords: [
    __('Определения', 'tiger'),
    __('Блок определение>', 'tiger'),
    __('Текс с заголовком', 'tiger'),
    __('Текс с заголовком и номером', 'tiger')
  ],
  attributes,
  edit,
  save
})
