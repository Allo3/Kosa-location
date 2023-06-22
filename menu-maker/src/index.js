import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Location from './components/pages/fiche-logement'
import Header from './components/Header'
import ErrorPage from './components/pages/404'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


