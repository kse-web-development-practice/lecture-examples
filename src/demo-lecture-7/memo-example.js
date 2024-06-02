import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'

const Form = ({ onClick }) => {
  console.log('Form has been re-rendered')
  return (
    <div>
      Form here <button onClick={onClick}>Click me!</button>
    </div>
  )
}

Form.propTypes = {
  onClick: PropTypes.func.isRequired
}

const FormWithMemo = memo(Form)

export const Catalog = () => {
  const [val, setVal] = useState(0)
  const rawClick = () => setVal(Date.now())
  // const onClick = useCallback(rawClick, [])
  return (
    <div>
      {val}
      <FormWithMemo onClick={rawClick} />
    </div>
  )
}
