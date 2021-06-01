import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { MediaUpload } from '@wordpress/block-editor'
import { IconButton } from '@wordpress/components'

export default class SectionHeading extends Component {
  render () {
    const {
      imgId,
      imgUrl,
      selectImgText,
      classNames,
      onChangeImg,
      onRemoveImg
    } = this.props

    return (
      <div className={'img ' + classNames}>
        {imgUrl
          ? (
            <>
              <img src={imgUrl} alt='image' />
              <IconButton
                onClick={() => onRemoveImg()}
                icon='trash'
                isButton
                isDestructive
              >
                {__('Удалить изображение', 'tiger')}
              </IconButton>
            </>
            )
          : (
            <>
              <div style={{ marginBottom: '8px' }}>
                {selectImgText || __('Выберете изображение', 'tiger')}
              </div>
              <MediaUpload
                onSelect={img => onChangeImg(img)}
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
                        ? __('Выбрать изображение', 'tiger')
                        : __('Заменить изображение', 'tiger')}
                    </IconButton>
                  )
                }}
              />
            </>
            )}
      </div>
    )
  }
}
