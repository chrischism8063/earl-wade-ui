import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element{<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
