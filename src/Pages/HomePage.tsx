// Dashboard.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import laptop1 from "./laptop1.jpg";
import laptop2 from "./laptop2.jpg";
import styles from "../styling/Dashboard.module.css";
import BlackFriday from "../components/BlackFriday";
import SoftwareAd from "../components/SoftwareAd";
import Dashboard from "../components/Dashboard";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const StyledBox = styled(Box)({
  marginLeft: "15px",
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  columnGap: "10px",
});

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8555/api/products");
      console.log("Response DATA", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <BlackFriday />
      <Dashboard />
      <SoftwareAd />
      <Dashboard />
    </div>
  );
};

export default HomePage;
