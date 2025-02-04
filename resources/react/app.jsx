import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './src/home'

const App = () => {
    return (
        <Router>
            <Suspense
                fallback={
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border" color="primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            >
                <Routes>
                    <Route path="*" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    )
}
export default App
