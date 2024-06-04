import React from 'react'
import ReactDOM from 'react-dom/client'
import { Lecture7 } from './demo-lecture-7'

const App = () => {
  return (
    <div>
      <Lecture7 />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
