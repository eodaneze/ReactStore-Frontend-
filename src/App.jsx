import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <Routes>
       <Route index element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
       
    </Routes>
  )
}

export default App