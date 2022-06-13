import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/General/Header';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Details from '../pages/Details';

export default function AllRoutes() {
    return (
        <Router>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/items/:id" element={<Details />} />
                </Routes>
            </div>
        </Router>
    );
}
