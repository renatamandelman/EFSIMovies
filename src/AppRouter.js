import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/:id" element={<>                             </>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;