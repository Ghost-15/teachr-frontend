import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppProvider} from "./auth/AppProvider.js";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path="/*" element={<App/>} />
                </Routes>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
)