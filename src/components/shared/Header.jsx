import React from "react";
import logo from "../../assets/logo.png";
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

const Header = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div className="p-4 flex items-start justify-around">
      {/* logo */}
      <div className=" w-4/12">
        <img src={logo} alt="" className="w-full" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-around gap-4">
          <div className="text-primary bg-secondary rounded-sm p-2 text-lg">
            <HiAdjustments />
          </div>

          {/* search bar  */}

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

          <Link to="/login">
            <button className="bg-button text-secondary font-semibold px-3 py-1.5 rounded-sm">
              Login
            </button>
          </Link>

          <Button variant="contained">Our Success Story</Button>

          {/* language select  */}
          <div className="flex items-center  rounded-full p-1 w-24 select-none">
            {/* EN text, active hole white, inactive hole gray */}
            <span
              className={`text-xs font-semibold mr-1  z-10 ${
                !enabled ? "text-secondary" : "text-secondary"
              }`}
            >
              {!enabled ? "EN" : "BN"}
            </span>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>
        </div>

        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Header;
