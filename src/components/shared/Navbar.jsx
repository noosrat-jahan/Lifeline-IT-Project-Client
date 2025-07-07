import React from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { ListItem } from "@mui/material"
const Navbar = () => {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/courses"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Courses
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-navmenu text-xl font-roboto">
              Students
            </NavigationMenuTrigger>
            <NavigationMenuContent side="bottom" align="start" sideOffset={8}>
              <ul className="grid gap-2 md:w-[100px] lg:w-[200px] ">
                <li className="flex flex-col items-start p-4 gap-4">
                  <NavigationMenuLink asChild>
                    <Link to="/certificate">Certificate Verify</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/success-story">Success Story</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/student-review">Student Reviews</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/about"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/contact"
                className="bg-transparent text-navmenu text-xl font-roboto"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuTrigger,
//   NavigationMenuContent,
//   NavigationMenuLink,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// export default function Navbar() {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   return (
//     <nav >
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">

//         {/* Hamburger for small devices */}
//         <div className="md:hidden">
//           {isMobileOpen ? (
//             <X size={24} onClick={() => setIsMobileOpen(false)} />
//           ) : (
//             <Menu size={24} onClick={() => setIsMobileOpen(true)} />
//           )}
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:block">
//           <NavigationMenu>
//             <NavigationMenuList className="gap-6">
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/" className="bg-transparent text-navmenu">Home</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/our-courses" className="bg-transparent text-navmenu">Courses</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger  className="bg-transparent text-navmenu">Students</NavigationMenuTrigger>
//                 <NavigationMenuContent side="bottom" align="start" sideOffset={8}>
//                   <ul className="grid gap-2 md:w-[100px] lg:w-[200px]">
//                     <li className="flex flex-col items-start p-4 gap-4">
//                       <NavigationMenuLink asChild>
//                         <Link to="/certificate" >Freelancer Story</Link>
//                       </NavigationMenuLink>
//                       <NavigationMenuLink asChild>
//                         <Link to="/success-story" >Success Story</Link>
//                       </NavigationMenuLink>
//                       <NavigationMenuLink asChild>
//                         <Link to="/student-review" >Student Reviews</Link>
//                       </NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/about" className="bg-transparent text-navmenu">About Us</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                   <Link to="/contact" className="bg-transparent text-navmenu">Contact</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileOpen && (
//         <div className="md:hidden bg-white px-4 py-6 shadow-inner space-y-4">
//           <Link to="/" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             Home
//           </Link>
//           <Link to="/our-courses" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             Courses
//           </Link>

//           {/* Students Section with Submenu */}
//           <div>
//             <p className="font-medium mb-2">Students</p>
//             <div className="pl-4 space-y-2 text-sm">
//               <Link to="/certificate" onClick={() => setIsMobileOpen(false)} className="block">
//                 Freelancer Story
//               </Link>
//               <Link to="/success-story" onClick={() => setIsMobileOpen(false)} className="block">
//                 Success Story
//               </Link>
//               <Link to="/student-review" onClick={() => setIsMobileOpen(false)} className="block">
//                 Student Reviews
//               </Link>
//             </div>
//           </div>

//           <Link to="/about" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             About Us
//           </Link>
//           <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="block font-medium">
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
