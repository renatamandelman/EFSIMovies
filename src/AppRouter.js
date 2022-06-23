import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App.js'
import DetallePelicula from './components/detallePelicula.js'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:id" element={<DetallePelicula />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;