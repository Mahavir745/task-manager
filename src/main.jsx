import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import Container from './component/Home/Container.jsx'
import NewTaskAdd from './component/AddTask/NewTaskAdd.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<NewTaskAdd/>}/>
      <Route path='/view-task' element={<Container/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
