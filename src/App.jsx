import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VideoCallPage from "./pages/VideoCallPage"; // Import VideoCallPage
import LandingPage from "./pages/LandingPage"; // Import LandingPage if needed
import Materials from "./components/material/Materials"; // Import Material if needed
import Calendar from "./components/Calendar/Calendar";
import TaskProgress from "./components/TaskProgress/TaskProgress";
import TaskTimeline from "./components/TaskTimeline/TaskTimeline";
import ChatBot from "./components/Chat/ChatBot"; // Corrected import path

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} /> {/* Add landing page route */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/video-call" element={<VideoCallPage />} /> {/* Add video call page route */}
                    <Route path="/landing-page" element={<LandingPage />} />
                    <Route path="/materials" element={<Materials />} /> {/* Add materials page route */}
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/task-progress" element={<TaskProgress />} />
                    <Route path="/task-timeline" element={<TaskTimeline />} /> {/* Add task timeline page route */}
                    <Route path="/chat" element={<ChatBot />} /> {/* Add chatbot page route */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;