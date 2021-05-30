import { Component } from '@wordpress/element'

export default class Save extends Component {
  constructor (props) {
    super(props)

    this.state = props.attributes
  }

  render () {
    const {
      isShowBg
    } = this.state

    return (
      null
    )
  }
}
