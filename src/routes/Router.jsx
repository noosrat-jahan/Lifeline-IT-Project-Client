import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "@/pages/Homepage/HomePage";
import AboutPage from "@/pages/Aboutpage/AboutPage";
import ContactPage from "@/pages/Contactpage/ContactPage";
import LoginPage from "@/pages/Loginpage/LoginPage";
import OurCourses from "@/pages/OurCourses/OurCourses";
import RegisterPage from "@/pages/Registerpage/RegisterPage";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import OtpPage from "@/pages/OTP/OtpPage";
import SuccessStory from "@/pages/SuccessStory/SuccessStory";
import StudentReview from "@/pages/StudentReview/StudentReview";
import CertificateVerify from "@/pages/CertificateVerify/CertificateVerify";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/our-courses",
        element: <OurCourses></OurCourses>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/certificate-verify",
        element: <CertificateVerify></CertificateVerify>,
      },
      {
        path: "/success-story",
        element: <SuccessStory></SuccessStory>,
      },
      {
        path: "/student-review",
        element: <StudentReview></StudentReview>,
      },

      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/otppage",
        element: <OtpPage></OtpPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default Router;
