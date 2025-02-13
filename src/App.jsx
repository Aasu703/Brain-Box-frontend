// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl p-4">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-4 px-6">
          <div className="text-xl font-bold">BRW BAR INC.</div>
          <ul className="hidden md:flex space-x-6 text-gray-600">
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Treatments</li>
            <li className="hover:text-black cursor-pointer">Packages</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
          <div className="hidden md:block text-gray-600 cursor-pointer">Admin ▼</div>
        </nav>

        {/* Hero Section */}
        <div className="relative grid md:grid-cols-2 gap-6 mt-10 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="https://source.unsplash.com/600x600/?face,woman" // Replace with your image
              alt="Eyebrow Model"
              className="w-full h-auto grayscale"
            />
            <div className="absolute bottom-4 left-4 w-3/4 h-2 bg-gray-600 opacity-40 transform -rotate-12"></div>
          </div>

          {/* Right Side - Text */}
          <div className="bg-green-100 p-8 rounded-md shadow-md">
            <h2 className="text-3xl font-bold">WE CHANGE THE WORLD</h2>
            <h2 className="text-3xl font-bold text-gray-600">ONE EYEBROW AT A TIME</h2>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Book an Appointment →
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 space-y-4">
          <a href="#" className="block text-gray-500 hover:text-black">📘</a>
          <a href="#" className="block text-gray-500 hover:text-black">📷</a>
        </div>
      </div>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;