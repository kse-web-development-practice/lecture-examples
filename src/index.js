import React from 'react'
import ReactDOM from 'react-dom/client'
import { Lecture8 } from './demo-lecture-8'

const App = () => {
  return (
    <div>
      <Lecture8 />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
