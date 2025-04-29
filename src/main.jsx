import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Regist from './Regist.jsx'
import Login from './pages/Login.jsx';
import UserSelection from './pages/UserSelection.jsx'
import UploadCV from './pages/UploadCV.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Regist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-user-type" element={<UserSelection />} />
        <Route path="/CV-ung-vien" element={<UploadCV />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
