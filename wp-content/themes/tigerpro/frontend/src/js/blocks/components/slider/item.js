import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { MediaUpload } from '@wordpress/block-editor'
import { Button, IconButton } from '@wordpress/components'

export default class Item extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: props.item,
      isLoading: false
    }
  }

  async onChangeImg (img) {
    if (img === undefined || img.id === undefined) {
      return
    }

    this.setState({ isLoading: true })

    const { index, onChangeItem } = this.props

    // eslint-disable-next-line no-undef
    const response = await fetch('/wp-json/wp/v2/media/' + img.id)
    const imgData = await response.json()

    const item = {
      id: img.id,
      fullSizeUrl: img.sizes.full.url,
      sliderSizeUrl: imgData.media_details.sizes.slider.source_url
        ? imgData.media_details.sizes.slider.source_url
        : img.sizes.full.url
    }

    onChangeItem(item, index)
    this.setState({ isLoading: false })
  }

  onRemoveImg () {
    const { index, onChangeItem } = this.props

    const item = {
      id: 0,
      fullSizeUrl: '',
      sliderSizeUrl: ''
    }

    onChangeItem(item, index)
  }

  render () {
    const {
      id,
      sliderSizeUrl
    } = this.props.item

    return (
      <>
        <span className='card card--primary card--image'>
          <div className='card__inner'>
            <div className='card__bg'>
              {sliderSizeUrl === ''
                ? (
                  <>
                    {this.state.isLoading
                      ? <p>{__('Загрузка изображения...', 'tiger')}</p>
                      : (
                        <>
                          <div style={{ marginBottom: '8px' }}>{__('Выберите изображение', 'tiger')}</div>
                          <MediaUpload
                            onSelect={img => this.onChangeImg(img)}
                            allowedTypes='image'
                            value={id}
                            render={({ open }) => {
                              return (
                                <IconButton
                                  onClick={open}
                                  icon='upload'
                                  isButton
                                  isDefault
                                >
                                  {!id
                                    ? __('Select Image', 'tiger')
                                    : __('Change Image', 'tiger')}
                                </IconButton>
                              )
                            }}
                          />
                        </>
                        )}
                  </>
                  )
                : (
                  <>
                    <img src={sliderSizeUrl} alt='project' />
                    this.props.isSelected &&
                    <Button
                      className='remove-item'
                      onClick={() => this.onRemoveImg()}
                      text='X'
                      label={__('Удалить изображение', 'tiger')}
                    />
                  </>
                  )}
            </div>
          </div>
        </span>
      </>
    )
  }
}
