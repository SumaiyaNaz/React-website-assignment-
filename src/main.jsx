import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import './index.css'
import '@fontsource/roboto'; 
import Footer from './Components/Footer.jsx'
import Topics from './Components/Topics.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <About />
    <Topics />
    <Footer />
  </StrictMode>,
)
