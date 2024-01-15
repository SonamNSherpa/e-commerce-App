// App.js or wherever your routes are defined

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import Dashboard from "./components/Dashboard";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/shared/Navbar";
import ShoppingCart from "../src/Pages/ShoppingCart";
import Laptops from "./Pages/Laptops";
import GamingAndLearning from "./Pages/GamingAndLearning";
import RegistrationForm from "./Pages/RegistrationForm";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Cart" element={<ShoppingCart />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/Softwares" element={<GamingAndLearning />} />
        <Route path="/Registration" element={<RegistrationForm />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
