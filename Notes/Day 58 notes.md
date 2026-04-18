Protected Routes - Complete Notes

What are Protected Routes?

Protected Routes are routes/pages that can only be accessed by authenticated users.

If the user is not logged in, redirect to the login page.
If the user is logged in, allow access.

Why do we need Protected Routes?

Secure sensitive pages like Dashboard, Profile, and Admin Panel.
Prevent unauthorized access.
Improve user experience with controlled navigation.

Basic Flow

User tries to access a protected route
|
Check authentication (token / login state)
|
If authenticated, allow access
Else, redirect to login

Implementation in React (React Router)

1. Create Auth Logic

Authentication can be stored in:

State (useState / Context API)
LocalStorage (token)
Redux / Zustand (advanced)

Example:

const isAuthenticated = localStorage.getItem("token");

2. Create Protected Route Component

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

3. Use in Routing

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

<Routes>
  <Route path="/login" element={<Login />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
</Routes>

How it Works

<ProtectedRoute> acts like a gatekeeper.
It checks authentication:

If not logged in, redirect using <Navigate />.
If logged in, render the child component.

Advanced Version (Role-Based Protection)

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

Example usage:

<Route
  path="/admin"
  element={
    <ProtectedRoute role="admin">
      <AdminPanel />
    </ProtectedRoute>
  }
/>
