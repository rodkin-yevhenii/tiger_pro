import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components'
import Card from './components/card'

export default class Edit extends Component {
  constructor (props) {
    super(props)

    let cards = [
      {
        id: 0,
        img: ''
      },
      {
        id: 0,
        img: ''
      },
      {
        id: 0,
        img: ''
      }
    ]

    if (this.props.attributes.cards !== undefined && this.props.attributes.cards.length === 3) {
      cards = this.props.attributes.cards
    }

    this.state = {
      siteUrl: 'http://tiger.pro/',
      allPages: [],
      cards
    }

    this.handleLoadAllPages = this.handleLoadAllPages.bind(this)
    this.setAttributes = props.setAttributes

    this.handleLoadAllPages()
  }

  handleLoadAllPages () {
    if (this.state.allPages.length !== 0) {
      return
    }

    // eslint-disable-next-line no-undef
    fetch(this.state.siteUrl + 'wp-json/wp/v2/pages')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const tempCards = data.map(item => {
          if (item.status === 'publish') {
            return {
              value: item.id,
              label: item.title.rendered
            }
          }

          return null
        })
        tempCards.unshift({ value: 0, label: '-- Выберите сраницу --' })

        this.setState({ allPages: tempCards.filter(val => val !== null) })
      })
  }

  async handleUpdateCard (id, index) {
    const cards = this.state.cards
    const newCards = [...cards]

    newCards[index].id = id
    this.setAttributes({ cards: newCards })
    newCards[index] = await this.getPageData(id)

    if (!newCards[index]) {
      return
    }

    this.setState({ cards: newCards })
  }

  async getPageData (id) {
    // eslint-disable-next-line no-undef
    const response = await fetch(this.state.siteUrl + 'wp-json/wp/v2/pages/' + id)
    const page = await response.json()

    if (parseInt(page.id) !== parseInt(id)) {
      return false
    }

    const img = await this.getThumbnailUrl(id)

    return {
      id,
      title: page.title.rendered,
      img
    }
  }

  async getThumbnailUrl (pageId) {
    // eslint-disable-next-line no-undef
    const response = await fetch(this.state.siteUrl + 'wp-json/wp/v2/media?parent=' + pageId)
    const images = await response.json()

    if (images.length < 1) {
      return ''
    }

    return images[0].media_details.sizes.cards.source_url
  }

  render () {
    const { className } = this.props
    const {
      allPages,
      cards
    } = this.state

    return (
      <>
        <div className={className}>
          <div className='block-title'>{__('Карточки страниц', 'tiger')}</div>
          <InspectorControls>
            <PanelBody
              label={__('Настройки нтактной формы', 'tiger')}
            >
              <PanelRow>
                <div id='cards_selects'>
                  {cards.map((card, index) => {
                    return (
                      <div key={index}>
                        <SelectControl
                          label={'Карточка ' + (index + 1)}
                          value={card.id}
                          options={allPages}
                          onChange={(id) => this.handleUpdateCard(id, index)}
                        />
                      </div>
                    )
                  })}
                </div>
              </PanelRow>
            </PanelBody>
          </InspectorControls>
          <section className='section section--cards '>
            <div className='section__overlay section__overlay--left'><span /></div>
            <div className='section__overlay section__overlay--right'><span /></div>
            <div className='container'>
              <div className='section__cards'>
                <div className='grid-container'>
                  {cards.map(
                    (card, index) => {
                      return (
                        <div key={index} className='grid-item-1-of-3'>
                          <Card
                            imgUrl={card.img}
                            title={card.title}
                          />
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
