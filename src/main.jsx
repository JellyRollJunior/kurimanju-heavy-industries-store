import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Homepage } from './components/Homepage/Homepage.jsx'
import './styles.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage></Homepage>
  </StrictMode>,
)
