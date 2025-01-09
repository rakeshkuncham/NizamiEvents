import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Layout from "./components/Layout"; // Layout for public pages
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
import BirthdayParties from "./pages/BirthdayParties";
import Weddings from "./pages/Weddings";
import CulturalEvents from "./pages/CulturalEvents";
import OfficeFests from "./pages/OfficeFests";
import GetTogethers from "./pages/GetTogethers";
import TraditionalEvents from "./pages/TraditionalEvents";

import AdminLogin from "./components/admin/AdminLogin"; // Admin login component
import AdminDashboard from "./components/admin/Dashboard"; // Admin dashboard component
import PrivateRoute from "./utils/PrivateRoute"; // Utility for protected routes

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "./App.css"; // Custom styles

const App = () => {
  return (
    <div className="app"> {/* Root container with a class for global styling */}
      <Router>
        <Routes>
          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/book" element={<Layout><BookNow /></Layout>} />
          <Route path="/birthday-parties" element={<Layout><BirthdayParties /></Layout>} />
          <Route path="/weddings" element={<Layout><Weddings /></Layout>} />
          <Route path="/cultural-events" element={<Layout><CulturalEvents /></Layout>} />
          <Route path="/office-fests" element={<Layout><OfficeFests /></Layout>} />
          <Route path="/get-togethers" element={<Layout><GetTogethers /></Layout>} />
          <Route path="/traditional-events" element={<Layout><TraditionalEvents /></Layout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
