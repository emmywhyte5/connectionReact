import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './Signup.jsx'
import Book from './book.jsx'
import Login from './login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<App />} />
   <Route path="/signup" element={<Signup />} />
   <Route path="/book" element={<Book />} />
   <Route path="/login" element={<Login />} />
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
