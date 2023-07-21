import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {route} from './Router/mainRoute'


const App = () => {
  return (
    <div>
       <RouterProvider router={route}/>
    </div>
  )
}

export default App