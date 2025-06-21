import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Checkbox } from "@mui/material"
import axios from "axios"

const RegisterPage = () => {
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const phone = form.phone.value
    const password = form.password.value

    const registerInfo = {
      name, email, phone, password
    }

    localStorage.setItem("RegisterInfo", JSON.stringify(registerInfo));
    alert("Data saved to localStorage!");

    console.log(email)

    try {
      const request = await axios.post(
        "https://lifelineit-back.onrender.com/api/auth/otp-verify",
        { email },  {withCredentials: true}
      )
      console.log(request.data)
      navigate("/otppage")
    } catch (error) {
      console.error("Axios Error:", error.response?.data || error.message)
      alert("Registration failed! Check console for details.")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,_#dbeafe_0%,_#e0e7ff_100%)] font-sans p-4">
      <div className="w-full max-w-[28rem]">
        <div className="bg-white rounded-[10px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 backdrop-blur-sm">
          <h1 className="text-[1.5rem] font-bold text-gray-800 mb-8 text-center">
            Sign Up
          </h1>

          <form class="login-form" onSubmit={handleRegister}>
            <div className="relative mb-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
                className="
                    peer
                    w-full pt-6 pb-2 px-4
                    text-gray-700
                    bg-transparent
                    border-0 border-b-2 border-gray-300
                    rounded-lg
                    transition-all duration-300 ease-in-out
                    outline-none
                    resize-none
                    text-base
                    focus:border-blue-500
                    focus:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]
                    hover:border-gray-400
                "
              />

              <label
                htmlFor="name"
                className="
                    absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out
                    top-1/2 -translate-y-1/2 text-base
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:text-base
                    peer-focus:top-2
                    peer-focus:text-sm
                    peer-focus:font-medium
                    peer-focus:text-blue-600
                    peer-focus:scale-90
                    peer-valid:top-2
                    peer-valid:text-sm
                    peer-valid:font-medium
                    peer-valid:text-blue-600
                    peer-valid:scale-90
                    transform origin-left
                "
              >
                Name*
              </label>

              <div className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 w-0"></div>
            </div>
            <div className="relative mb-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
                className="
                    peer
                    w-full pt-6 pb-2 px-4
                    text-gray-700
                    bg-transparent
                    border-0 border-b-2 border-gray-300
                    rounded-lg
                    transition-all duration-300 ease-in-out
                    outline-none
                    resize-none
                    text-base
                    focus:border-blue-500
                    focus:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]
                    hover:border-gray-400
                "
              />

              <label
                htmlFor="email"
                className="
                    absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out
                    top-1/2 -translate-y-1/2 text-base
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:text-base
                    peer-focus:top-2
                    peer-focus:text-sm
                    peer-focus:font-medium
                    peer-focus:text-blue-600
                    peer-focus:scale-90
                    peer-valid:top-2
                    peer-valid:text-sm
                    peer-valid:font-medium
                    peer-valid:text-blue-600
                    peer-valid:scale-90
                    transform origin-left
                "
              >
                Email*
              </label>

              <div className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 w-0"></div>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder=" "
                required
                className="
                    peer
                    w-full pt-6 pb-2 px-4
                    text-gray-700
                    bg-transparent
                    border-0 border-b-2 border-gray-300
                    rounded-lg
                    transition-all duration-300 ease-in-out
                    outline-none
                    resize-none
                    text-base
                    focus:border-blue-500
                    focus:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]
                    hover:border-gray-400
                "
              />

              <label
                htmlFor="phone"
                className="
                    absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out
                    top-1/2 -translate-y-1/2 text-base
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:text-base
                    peer-focus:top-2
                    peer-focus:text-sm
                    peer-focus:font-medium
                    peer-focus:text-blue-600
                    peer-focus:scale-90
                    peer-valid:top-2
                    peer-valid:text-sm
                    peer-valid:font-medium
                    peer-valid:text-blue-600
                    peer-valid:scale-90
                    transform origin-left
                "
              >
                Phone*
              </label>

              <div className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 w-0"></div>
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                required
                className="
                    peer
                    w-full pt-6 pb-2 px-4
                    text-gray-700
                    bg-transparent
                    border-0 border-b-2 border-gray-300
                    rounded-lg
                    transition-all duration-300 ease-in-out
                    outline-none
                    resize-none
                    text-base
                    focus:border-blue-500
                     focus:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.2)]
                    hover:border-gray-400
                "
              />

              <label
                htmlFor="password"
                className="
                    absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out
                    top-1/2 -translate-y-1/2 text-base
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:text-base
                    peer-focus:top-2
                    peer-focus:text-sm
                    peer-focus:font-medium
                    peer-focus:text-blue-600
                    peer-focus:scale-90
                    peer-valid:top-2
                    peer-valid:text-sm
                    peer-valid:font-medium
                    peer-valid:text-blue-600
                    peer-valid:scale-90
                    transform origin-left
                "
              >
                Password*
              </label>

              <div className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 w-0"></div>
            </div>

           
            <input
              type="submit"
              className="inline-block w-full mt-1.5 text-[var(--login-color-secondary)] py-2 text-base tracking-wider cursor-pointer bg-transparent border border-[var(--login-color-secondary)] rounded-[30px] shadow-[inset_0_0_0_0_var(--login-color-secondary)] transition duration-200 hover:text-white hover:shadow-[inset_500px_0_0_0_var(--login-color-primary)]"
              value="Register"
            />
          </form>
          <p className="text-center font-sans text-[15px] text-gray-600 mt-8">
            If you’ve already created an account, then
            <Link
              to="/login"
              className="text-blue-600 font-semibold no-underline hover:underline ml-2"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
