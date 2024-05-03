import React, { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import {ThemeProvider, CssBaseline} from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import CountryDetails from './pages/CountryDetails'
import {lightTheme, darkTheme} from './components/Theme'
import {Toaster} from 'react-hot-toast'
import './App.css'

const App = ()=>{
  
  const [themeSwitch, setThemeSwitch] = useState(true)
  
  return (
    <>
      <ThemeProvider theme={themeSwitch ? lightTheme : darkTheme}>
        <CssBaseline/>
        <Header themeSwitch={themeSwitch} setThemeSwitch={setThemeSwitch}/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/countrydetails/:id" element={<CountryDetails/>}/>
          </Routes>
          <Toaster/>
      </ThemeProvider> 
    </>
  )
}

export default App
