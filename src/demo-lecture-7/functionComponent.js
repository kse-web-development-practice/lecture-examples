import React, { useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

export function GreetingsFn(props) {
  const { name, tick } = props

  useEffect(() => {
    console.log('after renderPointer when counter is equal to ', props.tick)

    return () => {
      console.log('cleanup function for last effect when counter is equal to ', props.tick)
    }
  }, [props.tick])

  useLayoutEffect(() => {
    return () => {
      console.log('cleanup function for last LAYOUT effect when counter is equal to ', props.tick)
    }
  })

  return (
    <div>
      {console.log('renderPointer when counter is equal to ', props.tick)}
      Hello {name} {tick}
    </div>
  )
}

GreetingsFn.propTypes = {
  name: PropTypes.string.isRequired,
  tick: PropTypes.number.isRequired
}
