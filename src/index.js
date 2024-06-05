import React from 'react'
import ReactDOM from 'react-dom/client'
import { Lecture7 } from './demo-lecture-7'
import { Lecture8 } from './demo-lecture-8'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Demo</div>
  },
  {
    path: '/7',
    element: <Lecture7 />
  },
  {
    path: '/8',
    element: <Lecture8 />
  }
])

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
