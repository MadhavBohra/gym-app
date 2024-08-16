import React from 'react'
import {Route, Routes} from 'react-router-dom' // used for routing in react
import { Box } from '@mui/material'; // Box component is part of material UI

import './App.css'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m='auto'> 
        <Navbar />
        <Routes> {/*Container for all routes component*/}
            <Route path='/' element= {<Home/>} />  {/*will render the Home component*/}
            <Route path='/exercise/:id' element={<ExerciseDetail />} />

        </Routes>
        <Footer />
    </Box>
  )
}

export default App