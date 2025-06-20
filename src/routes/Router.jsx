import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '@/pages/Homepage/HomePage';
import AboutPage from '@/pages/Aboutpage/AboutPage';
import ContactPage from '@/pages/Contactpage/ContactPage';
import LoginPage from '@/pages/Loginpage/LoginPage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      }
    ]
  },
]);

export default Router;