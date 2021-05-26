import { Component } from '@wordpress/element'
import NumericDefinition from './components/numeric-definition'
import NoNumericDefinition from './components/nonumeric-definition'

export default class Save extends Component {
  constructor(props) {
    super(props)

    this.state = props.attributes
  }

  render() {
    const { isNumeric, title, number } = this.state

    return isNumeric ? (
      <NumericDefinition
        context='view'
        number={number}
        title={title}
        changeTitleCallback={title => this.setAttributes({ title })}
      />
    ) : (
      <NoNumericDefinition context='view' title={title} />
    )
  }
}
