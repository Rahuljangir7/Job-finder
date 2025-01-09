import React from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import LoginUser from "./pages/LoginUser";
import store from "./app/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "cyan",
  });
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
}

export default App;
