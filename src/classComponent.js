import React from 'react'
import PropTypes from 'prop-types'

export class Greetings extends React.Component {
  UNSAFE_componentWillMount() {
    console.log('will mount')
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    console.log('will receive props', nextProps, nextContext)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('it is to decide', nextProps, nextState, nextContext)
    return true
  }

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('component will be updated', nextProps, nextState, nextContext)
  }

  componentDidUpdate(nextProps, nextState, nextContext) {
    console.log('component has been updated', nextProps, nextState, nextContext)
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillUnmount() {
    console.log('will unmount')
  }

  render() {
    console.log('======> Render')
    const { name, tick } = this.props
    return (
      <div>
        Hello {name} {tick}
      </div>
    )
  }
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  tick: PropTypes.number.isRequired
}
