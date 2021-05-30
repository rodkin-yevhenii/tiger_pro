import { Component } from '@wordpress/element'

export default class Card extends Component {
  render () {
    const {
      imgUrl,
      title
    } = this.props

    return (
      <>
        <span className='card card--primary card--mobile-wide'>
          <div className='card__inner'>
            <div className='card__bg'>
              {!!imgUrl && <img src={imgUrl} alt='Геодезия' />}
            </div>
            <div className='card__overlay'>
              <div className='card__overlay-inner' />
              {!!title &&
                <h3 className='card__title card__title--secondary card__title--center'>{title}</h3>}
            </div>
          </div>
        </span>
      </>
    )
  }
}
