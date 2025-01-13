import "@mantine/core/styles.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login.js";

function App() {
  return (
    <>
      <Navbar />
      <Signup />
    </>
  );
}

export default App;