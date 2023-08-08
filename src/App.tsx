import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {route} from './Router/mainRoute'
import { Provider } from 'react-redux'
import { store } from './Global/store'


const App = () => {
  return (
    <div>
       <Provider store={store}>
       <RouterProvider router={route}/>
       </Provider>
    </div>
  )
}

export default App