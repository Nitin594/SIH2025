import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./Alumni/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Auth/Login";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Routes>
        {/* 🌐 Public Routes (always MainLayout if not authenticated) */}
        {!isAuthenticated && (
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/login" element={<Login />} />
          </Route>
        )}

        {/* 🔒 Authenticated Routes (AuthLayout) */}
        {isAuthenticated && (
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* You can add more protected routes here */}
          </Route>
        )}

        {/* 🚦 Redirect any unknown routes */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />} />
      </Routes>
    </Router>
  );
}


export default App;
