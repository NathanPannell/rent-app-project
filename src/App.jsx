import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateListing from "./pages/CreateListing";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
