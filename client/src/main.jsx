import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster/>
    <Analytics/>
  </StrictMode>,
)
