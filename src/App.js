import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CarouselGenerator from './CarouselGenerator';

const App = () => {
    return (
        <Router>
            <div className="container mx-auto p-4">
                <nav className="mb-4">
                    <ul className="flex space-x-4 justify-between">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link
                                className="flex align-middle"
                                to="https://linkedin.com/in/oktaykopcak"
                                target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="#0077b5"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route exact path="/" element={<CarouselGenerator />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
