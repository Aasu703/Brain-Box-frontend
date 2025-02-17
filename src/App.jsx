import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VideoCallPage from "./pages/VideoCallPage"; // Import VideoCallPage
import LandingPage from "./pages/LandingPage"; // Import LandingPage if needed

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} /> {/* Add landing page route */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/video-call" element={<VideoCallPage />} /> {/* Add video call page route */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;