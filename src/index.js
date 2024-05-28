import React from 'react'
import ReactDOM from 'react-dom/client'
import { Test } from './test'

const App = () => {
  return (
    <div>
      <Test />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
