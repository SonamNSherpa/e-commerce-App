import { useState, useEffect } from "react";
import axios from "axios";
import numeral from "numeral";
import laptop1 from "./laptop1.jpg";
import styles from "../styling/Dashboard.module.css";
import { Box, Button, Typography, styled } from "@mui/material";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const StyledCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "250px", // Set a fixed width for each card
  boxSizing: "border-box",
});

const StyledBox = styled(Box)({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "500px",

  marginTop: "40px",
  columnGap: "10px",
});

const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
  justifyContent: "center",
});

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8555/products");
      console.log("Response DATA", response.data);
      setProducts(response.data.slice(0, 3)); // Display only the first 3 products
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product: Product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <CenteredBox>
      <Typography variant="h2" sx={{ marginTop: "-140px" }}>
        Top 3 Best Sellers
      </Typography>
      <StyledBox>
        {loading ? (
          <p>Loading ... </p>
        ) : (
          <>
            {products.map((product) => (
              <StyledCard key={product.id}>
                <div className={styles.productContainer}>
                  <img
                    src={laptop1}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productDetails}>
                  <h4>{product.name}</h4>
                  <h4>
                    {product.id} : {product.description}
                  </h4>
                  <h3>{numeral(product.price).format("$0,0.00")}</h3>
                  <Button variant="outlined" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </StyledCard>
            ))}
          </>
        )}
      </StyledBox>
      <div>
        <h2>Shopping Cart</h2>
        {selectedProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{numeral(product.price).format("$0,0.00")}</p>
          </div>
        ))}
      </div>
    </CenteredBox>
  );
};

export default Dashboard;
