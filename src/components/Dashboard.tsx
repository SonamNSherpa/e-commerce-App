// Dashboard.js
import { useState, useEffect } from "react";
import axios from "axios";
import numeral from "numeral";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import laptop1 from "./laptop1.jpg";
import laptop2 from "./laptop2.jpg";
import styles from "../styling/Dashboard.module.css";
import BlackFriday from "./BlackFriday";
import SoftwareAd from "./SoftwareAd";

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

const Dashboard = () => {
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
      <h2>Elite Laptop Deals</h2>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <StyledBox>
          {products.map((product) => (
            <div>
              <div className={styles.productContainer} key={product.id}>
                <img
                  src={laptop1}
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>
              {/* <img
                src={laptop2}
                alt={product.name}
                className={styles.productImage}
                style={{ animation: "imageTransition 4s infinite" }}
              /> */}
              <div className={styles.productDetails}>
                <h4>{product.name}</h4>
                <h4>
                  {product.id} : {product.description}
                </h4>
                <h3>{numeral(product.price).format("$0,0.00")}</h3>
              </div>
            </div>
          ))}
        </StyledBox>
      )}
    </div>
  );
};

export default Dashboard;
