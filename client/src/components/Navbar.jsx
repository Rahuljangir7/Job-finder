import React, { useState } from "react";
import { Button, useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setColorScheme } = useMantineColorScheme();
  const [colorName, setColorName] = useState(true);

  const themeChange = () => {
    console.log(colorName);
    if (colorName) {
      setColorScheme("dark");
      setColorName(!colorName);
    } else {
      setColorScheme("light");
      setColorName(!colorName);
    }
  };
  return (
    <div>
      <header className="flex">
        <h1>
          Job <span>finder</span>
        </h1>
        <ul className="flex">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
        <div>
          <Button onClick={themeChange}>
            {colorName ? <FaMoon /> : <FaSun />}
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

