import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './Signup.jsx'
import Book from './book.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <><BrowserRouter>
   <Route path="/" element={<App />} />
   <Route path="/signup" element={<Signup />} />
   <Route path="/book" element={<Book />} />
   </BrowserRouter></>
  </StrictMode>,
)
