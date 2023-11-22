import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './view/Home'
import NoPage from './view/NoPage'
import { Container } from '@mui/material'

function App() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  )
}

export default App
