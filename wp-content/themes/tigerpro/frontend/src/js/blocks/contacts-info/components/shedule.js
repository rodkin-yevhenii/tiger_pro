import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

export default class Schedule extends Component {
  render () {
    const {
      scheduleHeading,
      schedule,
      handleChangeScheduleHeading,
      handleChangeSchedule
    } = this.props

    return (
      <>
        <RichText
          tagName='h4'
          className='subheading subheading--mb-md'
          value={scheduleHeading}
          placeholder={__('Заголовок', 'tiger')}
          onChange={scheduleHeading => handleChangeScheduleHeading(scheduleHeading)}
        />
        <div className='contacts__item-content'>
          <RichText
            tagName='span'
            className='link link--secondary'
            value={schedule}
            placeholder={__('Введите Расписание', 'tiger')}
            onChange={schedule => handleChangeSchedule(schedule)}
          />
        </div>
      </>
    )
  }
}
