import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ApiFetch from "./components/ApiFetch";
import Nested from "./components/Nested";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="repositories" element={<ApiFetch />} />
                <Route path="repositories/:reponame" element={<Nested />} />
                <Route path="*" element={<ErrorPage/>} /> 
            </Routes>
        </Router>
    );
}

export default App;
