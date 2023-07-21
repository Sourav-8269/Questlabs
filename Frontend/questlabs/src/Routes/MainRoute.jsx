import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Meditation from '../Components/Meditation'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Meditation/>} />
        <Route path="*" element={<h1>No Routes Found</h1>}/>
    </Routes>
  )
}

export default MainRoute