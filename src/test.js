import React, { useEffect, useState } from 'react'

export const Test = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    setValue(10)
  })
  return <div>It's test {value}</div>
}
