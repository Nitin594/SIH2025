import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ProfileForm from "./components/Auth/ProfileForm";
<<<<<<< HEAD
=======
import Profile from "./Alumni/Profile";
import Discussions from "./Alumni/Discussions";
import AlumniEvents from "./Alumni/Events";
import Mentorships from "./Alumni/Mentorships";
import AlumniAchievements from "./Alumni/Achievements";
import Donation from "./Alumni/Donation";
import Notifications from "./Alumni/Notifications";
import Settings from "./Alumni/Settings";
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee

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
            {/* <Route path="/login" element={<Login />} /> */}
          </Route>
        )}

        {/* 🔒 Authenticated Routes (AuthLayout) */}
        {isAuthenticated && (
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
            <Route
              path="/complete-profile"
              element={
                isAuthenticated ? <ProfileForm/> : <Navigate to="/dashboard" />
              }
            />
=======
            <Route path="/complete-profile" element={<ProfileForm />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/discussion" element={<Discussions/>}/>
            <Route path="/events" element={<AlumniEvents/>}/>
            <Route path="/mentorship" element={<Mentorships/>}/>
            <Route path="/achievements" element={<AlumniAchievements/>}/>
            <Route path="/donation" element={<Donation/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/settings" element={<Settings/>}/>
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
            {/* You can add more protected routes here */}
          </Route>
        )}

        {/* 🚦 Redirect any unknown routes */}
<<<<<<< HEAD
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />}
        />
=======
        {/* <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />}
        /> */}
>>>>>>> 2248dbd0872ccfe64eb3e8ad69d00c6dbba0ddee
      </Routes>
    </Router>
  );
}

export default App;
