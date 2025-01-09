// src/utils/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * A protected route component that checks if the user is authenticated.
 * If the user is authenticated, it renders the protected component.
 * Otherwise, it redirects the user to the login page.
 */
const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated by checking the 'adminAuth' flag in localStorage
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  
  // Debugging: log the authentication status
  console.log('Authenticated:', isAuthenticated);
  
  // If authenticated, render the children (protected component), else redirect to login page
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
