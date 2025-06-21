import React from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
const Navbar = () => {
  return (
    <div>
      <NavigationMenu >
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/our-courses">Courses</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem >
            <NavigationMenuTrigger>Students</NavigationMenuTrigger>
            <NavigationMenuContent side="bottom" align="start" sideOffset={8}>
              <ul className="grid gap-2 md:w-[100px] lg:w-[200px] ">
                <li className="flex flex-col items-start p-4 gap-4">
                  <NavigationMenuLink asChild>
                    <Link to="#">Freelancer Story</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Success Story</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Student Reviews</Link>
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
              <Link to="/about">About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;


// demo
// import React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Link } from "react-router-dom";

// const Navbar = ({ vertical = false }) => {
//   return (
//     <div>
//       <NavigationMenu >
//         <NavigationMenuList className="gap-6">
//           <NavigationMenuItem>
//             <NavigationMenuLink
//               asChild
//               className={navigationMenuTriggerStyle()}
//             >
//               <Link to="/">Home</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink
//               asChild
//               className={navigationMenuTriggerStyle()}
//             >
//               <Link to="/our-courses">Courses</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Students</NavigationMenuTrigger>
//           <NavigationMenuContent
//             side={vertical ? "right" : "bottom"}
//             align={vertical ? "start" : "start"}
//             sideOffset={8}
//           >
//             <ul className="grid gap-2 md:w-[100px] lg:w-[200px] ">
//               <li className="flex flex-col items-start p-4 gap-4">
//                 <NavigationMenuLink asChild>
//                   <Link to="#">Freelancer Story</Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">Success Story</Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">Student Reviews</Link>
//                 </NavigationMenuLink>
//               </li>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//           <NavigationMenuItem>
//             <NavigationMenuLink
//               asChild
//               className={navigationMenuTriggerStyle()}
//             >
//               <Link to="/about">About Us</Link>
//             </NavigationMenuLink>
//           </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link to="/contact">Contact</Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// };

// export default Navbar;
