import React from "react";
import { Button, useMantineColorScheme } from "@mantine/core";

const Navbar = () => {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
    <div>
      <header>
        <h1>
          Job <span>finder</span>
        </h1>
        <div>
          <Button onClick={() => setColorScheme("light")}>Light</Button>
          <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
