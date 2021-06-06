import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { RichText, InspectorControls } from '@wordpress/block-editor'
import { Button, PanelBody, PanelRow, TextControl, ToggleControl } from '@wordpress/components'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    this.handleLoadSiteData = this.handleLoadSiteData.bind(this)
    this.state = { loadDefaultText: __('Значения по умолчанию', 'tiger') }

    this.setAttributes = props.setAttributes
  }

  handleLoadSiteData () {
    this.setState({ loadDefaultText: __('Загрузка...', 'tiger') })

    fetch('/wp-json/tiger/v1/contacts')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setAttributes({
          phone: data.phone,
          email: data.email,
          telegram: data.messengers.telegram,
          viber: data.messengers.viber,
          whatsapp: data.messengers.whatsapp
        })

        this.setState({ loadDefaultText: __('Значения по умолчанию', 'tiger') })
      })
  }

  render () {
    const { className, attributes } = this.props
    const {
      isShowBg,
      formHeading,
      contactsHeading,
      btnText,
      phone,
      email,
      telegram,
      viber,
      whatsapp
    } = attributes

    return (
      <>
        <div className={'contacts ' + className}>
          <div className='block-title'>{__('Контактная форма', 'tiger')}</div>
          <InspectorControls>
            <PanelBody
              label={__('Настройки нтактной формы', 'tiger')}
            >
              <PanelRow>
                <ToggleControl
                  label='Фоновое изображение'
                  checked={isShowBg}
                  onChange={() => this.setAttributes({ isShowBg: !isShowBg })}
                />
              </PanelRow>
              <PanelRow>
                <div>
                  <div>
                    <TextControl
                      label={__('Telegram', 'tiger')}
                      value={telegram}
                      onChange={telegram => this.setAttributes({ telegram })}
                    />
                  </div>
                  <div>
                    <TextControl
                      label={__('Viber', 'tiger')}
                      value={viber}
                      onChange={viber => this.setAttributes({ viber })}
                    />
                  </div>
                  <div>
                    <TextControl
                      label={__('Whatsapp', 'tiger')}
                      value={whatsapp}
                      onChange={whatsapp => this.setAttributes({ whatsapp })}
                    />
                  </div>
                </div>
              </PanelRow>
              <PanelRow>
                <Button
                  label={__('Значения будут загружены из настроек темы.', 'tiger')}
                  className='js-load-default-contacts'
                  style={{ margin: 'auto' }}
                  isSecondary
                  text={this.state.loadDefaultText}
                  onClick={this.handleLoadSiteData}
                />
              </PanelRow>
            </PanelBody>
          </InspectorControls>
          <section className={isShowBg ? 'section section-callback' : 'section'} id='section-callback'>
            <div className='container'>
              <div className='section__callback callback'>
                <div className='callback__item'>
                  <RichText
                    tagName='p'
                    className='subheading subheading--sm'
                    value={formHeading}
                    placeholder={__('Заголовок формы контактов', 'tiger')}
                    onChange={formHeading => this.setAttributes({ formHeading })}
                  />
                  <div id='contacts-form' className='form'>
                    <div className='form'>
                      <div>
                        <div className='form__field'>
                          <input type='text' id='contacts-name' />
                          <label className='form__field-label' htmlFor='contacts-name'>
                            {__('Имя', 'tiger')}
                          </label>
                        </div>
                        <div className='form__field'>
                          <input type='text' id='contacts-phone' />
                          <label className='form__field-label' htmlFor='contacts-phone'>
                            {__('Телефон', 'tiger')}
                          </label>
                        </div>
                        <div className='form__actions form__actions--left'>
                          <RichText
                            tagName='button'
                            className='btn btn--primary'
                            value={btnText}
                            placeholder={__('ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ', 'tiger')}
                            onChange={btnText => this.setAttributes({ btnText })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='callback__item'>
                  <RichText
                    tagName='p'
                    className='subheading subheading--sm'
                    value={contactsHeading}
                    placeholder={__('Заголовок контактных данных', 'tiger')}
                    onChange={contactsHeading => this.setAttributes({ contactsHeading })}
                  />
                  <ul className='callback__info'>
                    <li>
                      <span className='link'>
                        <span className='link__inner'>
                          <svg className='icon'>
                            <use xlinkHref='/wp-content/themes/tigerpro/frontend/src/img/icons-sprite.svg#icon-phone' />
                          </svg>
                          <RichText
                            tagName='span'
                            value={phone}
                            placeholder='80671234567'
                            onChange={phone => this.setAttributes({ phone })}
                          />
                        </span>
                      </span>
                    </li>
                    <li>
                      <div className='socials__list'>
                        <ul>
                          {!!viber &&
                          (
                            <li>
                              <img src='/wp-content/themes/tigerpro/frontend/src/img/icons/viber.svg' alt='Мы в вайбере' />
                            </li>
                          )}
                          {!!telegram &&
                          (
                            <li>
                              <img src='/wp-content/themes/tigerpro/frontend/src/img/icons/telegram.svg' alt='Мы в вайбере' />
                            </li>
                          )}
                          {!!whatsapp &&
                          (
                            <li>
                              <img src='/wp-content/themes/tigerpro/frontend/src/img/icons/whatsapp.svg' alt='Мы в вайбере' />
                            </li>
                          )}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <span className='link'>
                        <span className='link__inner'>
                          <svg className='icon'>
                            <use xlinkHref='/wp-content/themes/tigerpro/frontend/src/img/icons-sprite.svg#icon-mail' />
                          </svg>
                          <RichText
                            tagName='span'
                            value={email}
                            placeholder='example@example.com'
                            onChange={email => this.setAttributes({ email })}
                          />
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
