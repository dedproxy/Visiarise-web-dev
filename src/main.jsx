import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Headset from './components/Headset.jsx'
import Services from './components/Services.jsx'
import Demo from './components/Demo.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <Headset/>
    <Services/>
    <Demo/>
    <Content/>
    <Footer/>
  </StrictMode>,
)
