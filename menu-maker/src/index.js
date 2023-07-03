import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/index.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/Header'
import ErrorPage from './components/pages/404'
import Footer from "./components/Footer/footer";
import About from "./components/pages/About/about";
import LocationPage from "./components/pages/Location/location";
import Testing from "./components/pages/test/test";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/location" element={<LocationPage/>}/>
                <Route path="/test" element={<Testing/>}/>
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)


