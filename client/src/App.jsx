import React from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import LoginUser from "./pages/LoginUser";
import store from "./app/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "cyan",
  });
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <LoginUser />
      </Provider>
    </MantineProvider>
  );
}

export default App;
