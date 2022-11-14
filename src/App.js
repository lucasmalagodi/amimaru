import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/produtos/Produtos';
import './global.css';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Routes>
                <Route path='produtos' element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;