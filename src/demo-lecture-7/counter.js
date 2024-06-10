import React, { useState, useReducer, useEffect, useMemo, useRef } from 'react'
import { fetchData } from './tools'

export const Counter = () => {
  const [value, setValue] = useState(0)
  setTimeout(() => {
    setValue(value + 1)
  }, 1000)

  return <div>Counter: {value}</div>
}

function reducer(state, action) {
  if (action.type === 'increase') {
    return state + 1
  } else if (action.type === 'decrease') {
    return state - 1
  } else if (action.type === 'set') {
    return action.value
  } else {
    return state
  }
}

export const CounterAsReducer = () => {
  const [value, dispath] = useReducer(reducer, 0)

  setTimeout(() => {
    dispath({
      type: 'set',
      value: value + 1
    })
  }, 1000)

  return <div>Counter: {value}</div>
}

export const CounterWithEffect = () => {
  const [counter, setCounter] = useState(null)

  useEffect(() => {
    fetchData.then((result) => setCounter(result))
  }, [counter])

  return <div>Counter: {counter}</div>
}

export const CounterWithUseMemo = () => {
  const [counter, setCounter] = useState(0)

  const count = useMemo(() => {
    for (let i = 0; i < 999999999; ++i) {
      //
    }
    return 100
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setCounter(count + counter)
    }, 1000)
  }, [counter])

  return <div>Counter: {counter}</div>
}

export const CounterWithUseRef = () => {
  const [counter, setCounter] = useState(0)
  const ref = useRef(null)
  const ref1 = useRef(null)
  console.log(ref1)
  const save = () => {
    if (ref.current) {
      setCounter(ref.current.value)
    }
  }

  ref1.current = 10

  return (
    <div>
      Counter: {counter}
      <input ref={ref} type="text" defaultValue={0} />
      <button onClick={save}>Save</button>
    </div>
  )
}
