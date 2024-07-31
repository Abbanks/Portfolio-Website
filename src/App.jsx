import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import ContactMe from './pages/Contactme'
import About from './pages/AboutMe'
import Projects from './pages/Projects'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contactme" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
