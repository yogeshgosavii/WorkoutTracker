import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Goals from './pages/Goals.jsx';
import Tracker from './pages/Tracker.jsx';
import Schedule from './pages/Schedule.jsx';
import AddWorkouts from './pages/AddWorkouts.jsx';

const router = createBrowserRouter([

    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
    {
      path: "/goals",
      element: <Goals />,
    },
    {
      path: "/tracker",
      element: <Tracker />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
    {
      path: "/add-workout",
      element: <AddWorkouts />,
    },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
