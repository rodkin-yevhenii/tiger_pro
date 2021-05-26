import { Component } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import {
  PanelBody,
  PanelRow,
  TextControl,
  ToggleControl
} from '@wordpress/components'
import { InspectorControls } from '@wordpress/block-editor'
import NumericDefinition from './components/numeric-definition'
import NoNumericDefinition from './components/nonumeric-definition'

export default class Edit extends Component {
  constructor(props) {
    super(props)

    this.clientId = props.clientId
    this.setAttributes = props.setAttributes
    this.state = props.attributes
  }

  render() {
    const { className, attributes } = this.props
    const { isNumeric, number, title } = attributes

    return (
      <>
        <div className={'definition' + className}>
          <div className='block-title'>{__('Определение', 'tiger')}</div>
          <InspectorControls>
            <PanelBody title={__('Настройки блока определений', 'tiger')}>
              <PanelRow>
                <ToggleControl
                  label={__('Блок с номером', 'tiger')}
                  checked={isNumeric}
                  onChange={value =>
                    this.setAttributes({ isNumeric: !isNumeric })
                  }
                />
              </PanelRow>
              {isNumeric && (
                <PanelRow>
                  <TextControl
                    label={__('Номер блока', 'tiger')}
                    value={number}
                    onChange={value =>
                      this.setAttributes({ number: parseInt(value) })
                    }
                    type='number'
                  />
                </PanelRow>
              )}
            </PanelBody>
          </InspectorControls>
          {isNumeric ? (
            <NumericDefinition
              context='edit'
              number={number}
              title={title}
              changeTitleCallback={title => this.setAttributes({ title })}
            />
          ) : (
            <NoNumericDefinition
              context='edit'
              title={title}
              changeTitleCallback={title => this.setAttributes({ title })}
            />
          )}
        </div>
      </>
    )
  }
}
