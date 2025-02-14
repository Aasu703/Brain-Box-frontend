// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import VideoCallPage from './pages/VideoCallPage';  // ✅ Import VideoCallPage
import { AuthProvider } from './context/AuthContext';  // ✅ Import AuthProvider

const App = () => {
    return (
        <AuthProvider>  {/* ✅ Wrap everything with AuthProvider */}
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/video-call" element={<VideoCallPage />} />  {/* ✅ Add VideoCallPage Route */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
