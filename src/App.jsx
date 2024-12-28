import React from 'react'
import Header from './component/Header/Header'
import ProgressBar from './component/ProgressBar/ProgressBar'
import { Outlet } from 'react-router-dom'
import AddDataStoreProvider from './store/taskData-store'
import "./App.css"
const App = () => {
  
  return (
    <AddDataStoreProvider>
    <Header/>
    <ProgressBar/>
    <Outlet/>
    </AddDataStoreProvider>
  )
}

export default App