import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Meditation from '../Components/Meditation'
import FinalOutput from '../Components/FinalOutput'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Meditation/>} />
        <Route path="/result" element={<FinalOutput/>} />
    </Routes>
  )
}

export default MainRoute