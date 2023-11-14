import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'
import Result from './Result'

import { CheckUserExits } from './helper/helper'
import Front from './Front'
import FirstLook from './components/firstLook'
 

const router = createBrowserRouter([
  {
     path:'/',
     element:<Front/>
  },
  {
    path:'/home/:quizname/:head',
    element:<Home />
  },
  {
    path:'/quiz',
    element:<CheckUserExits><Quiz /></CheckUserExits> 
  },
  {
    path:'/result',
    element:<CheckUserExits><Result /></CheckUserExits>
  },
  {
    path:'/first',
    element:<FirstLook/>
  },
 
])
function App()
{
  return (
            <>
              <RouterProvider  router={router}/>
            </>
         )
}

export default App;

