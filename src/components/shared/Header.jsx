import React from "react";
import logo from "../../assets/Website Logo.png";
import { HiAdjustments } from "react-icons/hi";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Button from "@mui/material/Button";

import { Switch } from "@/components/ui/switch";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // default: not logged in
  const [user, setUser] = useState({}); // Making this useState to use later.

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const result = await axios.get(
          import.meta.env.VITE_API_URL + "/api/auth/check",
          {
            withCredentials: true,
          }
        );
        if (result.status == 200 && result.data.loggedIn == true) {
          setIsLoggedIn(true);
          setUser(result.data.user);
        }
      } catch (error) {
        setIsLoggedIn(false);
        console.error("Error setting up request:", error.message);
      }
    };

    verifyLogin();
  }, []);

  const [enabled, setEnabled] = React.useState(false);
  return (
    <div className="p-3 flex items-center justify-around ">
      {/* logo */}
      <div className=" lg:w-3/12">
        <img src={logo} alt="" className="w-full" />
      </div>
      <div className="flex lg:flex-col items-center lg:gap-5">
        <div className="flex items-center justify-around gap-4">
          <div className="text-primary bg-secondary rounded-sm p-2 text-lg hidden lg:block">
            <HiAdjustments />
          </div>

          {/* search bar  */}

          {/* Search icon for mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <IconButton
              sx={{ p: "10px", color: "white" }}
              aria-label="search"
              
              // onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <SearchIcon />
            </IconButton>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search here..."
                inputProps={{ "aria-label": "Search here..." }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>

          {/* <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search here..."
              inputProps={{ "aria-label": "Search here..." }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper> */}

          <Link to={isLoggedIn ? "/future-dashboard-link-goes-here" : "/login"}>
            <button className="text-white text-center lg:px-[25px] px-[20px] py-[8px] lg:py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
              {isLoggedIn ? "🎓 Dashboard" : "Login"}
            </button>
          </Link>

          <Link to="/" className="hidden lg:flex">
            <button className="m-2 px-[45px] py-[15px] font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white rounded-[10px] shadow-[0_0_20px_#eee] gap-3 hover:bg-[position:right_center] hover:text-white">
              Success Stories <FaArrowRight />
            </button>
          </Link>

          {/* language select  */}
          <div className="lg:flex items-center hidden  rounded-full p-1 w-24 select-none">
            {/* EN text, active hole white, inactive hole gray */}
            <span
              className={`text-xs font-semibold mr-1  z-10 ${
                !enabled ? "text-secondary " : "text-secondary"
              }`}
            >
              {!enabled ? "বাং" : "EN"}
            </span>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>

          <div className="text-white text-lg">
            <AiOutlineMenuFold />
          </div>
        </div>

        <div className="hidden lg:flex">
          <Navbar></Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;

// // demo
// import React, { useState } from "react";
// import logo from "../../assets/logo.png";
// import { HiAdjustments } from "react-icons/hi";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { Switch } from "@/components/ui/switch";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

// const Header = () => {
//   const [enabled, setEnabled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

//   return (
//     <div className="px-4 py-3 shadow-xl bg-white w-full relative">
//       {/* Top row */}
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//         <div className="flex items-center justify-between w-full lg:w-auto">
//           {/* Mobile: hamburger + logo */}
//           <div className="flex items-center gap-4">
//             <button
//               className="lg:hidden text-2xl text-gray-700"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <FaBars />
//             </button>
//             <div className="max-w-[160px]">
//               <img src={logo} alt="Logo" className="w-full" />
//             </div>
//           </div>

//           {/* Search icon for mobile */}
//           <div className="lg:hidden flex items-center gap-2">
//             <IconButton
//               sx={{ p: "10px" }}
//               aria-label="search"
//               onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//             >
//               <SearchIcon />
//             </IconButton>
//           </div>

//   {/* Login + Language Toggle */}
//            <Link to="/login">
//             <button className="text-white text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center]">
//               Login
//             </button>
//           </Link>

//           <div className="hidden lg:flex items-center rounded-full p-1 w-24 select-none">
//             <span className={`text-xs font-semibold mr-1 z-10 text-primary`}>
//               {!enabled ? "EN" : "BN"}
//             </span>
//             <Switch checked={enabled} onCheckedChange={setEnabled} />
//           </div>
//         </div>

//         {/* Search bar */}
//         <div className="hidden lg:flex items-center justify-center flex-1">
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: 300,
//             }}
//           >
//             <IconButton sx={{ p: "10px" }} aria-label="menu">
//               <MenuIcon />
//             </IconButton>
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search here..."
//               inputProps={{ "aria-label": "Search here..." }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </div>

//       </div>

//       {/* Floating Mobile Search */}
//       {mobileSearchOpen && (
//         <div className="absolute top-full left-0 w-full z-50 mt-2 px-4">
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: "100%",
//             }}
//           >
//             <IconButton sx={{ p: "10px" }} aria-label="menu">
//               <MenuIcon />
//             </IconButton>
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search here..."
//               inputProps={{ "aria-label": "Search here..." }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </div>
//       )}

//       {/* Desktop Navbar */}
//       <div className="mt-4 hidden lg:block">
//         <Navbar />
//       </div>

//       {/* Mobile Nav Dropdown */}
//       {mobileMenuOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             onClick={() => setMobileMenuOpen(false)}
//             className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
//               mobileMenuOpen
//                 ? "opacity-100 pointer-events-auto"
//                 : "opacity-0 pointer-events-none"
//             }`}
//           ></div>

//           {/* Sliding panel */}
//           <div
//             className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
//     ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
//           >
//             <div className="p-4 flex justify-between items-center border-b">
//               <h2 className="text-lg font-bold">Menu</h2>
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="text-2xl font-bold"
//                 aria-label="Close menu"
//               >
//                 &times;
//               </button>
//             </div>

//             <nav className="px-4 mt-4">
//               <Navbar vertical />
//             </nav>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Header;
