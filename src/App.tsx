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
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
