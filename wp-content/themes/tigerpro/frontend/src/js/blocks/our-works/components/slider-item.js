import { Component } from '@wordpress/element'
import { RichText, MediaUpload } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import { IconButton } from '@wordpress/components'

class SliderItem extends Component {
  render () {
    const {
      index,
      item,
      onChangeImg,
      onRemoveImg,
      onRemoveItem,
      onHandleItemTextChange
    } = this.props
    const {
      imgId,
      imgUrl,
      text
    } = item

    return (
      <>
        <div className='slider__item'>
          <span className='card card--primary card--default'>
            <div className='card__inner'>
              <div className='card__bg'>
                {imgUrl === ''
                  ? (
                    <>
                      <div style={{ marginBottom: '8px' }}>{__('Select image', 'tiger')}</div>
                      <MediaUpload
                        onSelect={img => onChangeImg(img, index)}
                        allowedTypes='image'
                        value={imgId}
                        render={({ open }) => {
                          return (
                            <IconButton
                              onClick={open}
                              icon='upload'
                              isButton
                              isDefault
                            >
                              {!imgId
                                ? __('Select Image', 'tiger')
                                : __('Change Image', 'tiger')}
                            </IconButton>
                          )
                        }}
                      />
                    </>
                    )
                  : (
                    <>
                      <img src={imgUrl} alt='project' />
                      <IconButton
                        onClick={() => onRemoveImg(index)}
                        icon='trash'
                        isButton
                        isDestructive
                      >
                        {__('Remove Image', 'tiger')}
                      </IconButton>
                      <IconButton
                        onClick={() => onRemoveItem(index)}
                        icon='trash'
                        isButton
                        isDestructive
                      >
                        {__('Remove Item', 'tiger')}
                      </IconButton>
                    </>
                    )}
              </div>
            </div>
            <div className='card__content'>
              <RichText
                tagName='p'
                className='card__text'
                value={text}
                placeholder={__('Добавьте описание работы', 'tiger')}
                onChange={text => onHandleItemTextChange(text, index)}
              />
            </div>
          </span>
        </div>
      </>
    )
  }
}

export default SliderItem
