import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthCheck({ children, user }) {
  const location = useLocation();

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
