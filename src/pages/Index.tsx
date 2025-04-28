import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // This just redirects to our main farewell page
  // We're keeping this file since it might be referenced elsewhere
  return <Navigate to="/" replace />;
};

export default Index;
