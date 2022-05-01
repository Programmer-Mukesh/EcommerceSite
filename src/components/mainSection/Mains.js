import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./category/Categories";
import Products from "./products/Products";
import "../../styles/productCard.scss";
import { Container } from "@mui/material";

const containerStyles = {
  "@media(max-width:767px)": {
    padding: "0px",
  },
};

const Mains = () => {
  const [categoryData, setCategoryData] = useState([]);

  const getCategories = async () => {
    try {
      const apiResponse = await axios.get(
        "https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob"
      );
      setCategoryData(apiResponse.data.category_list);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container sx={containerStyles}>
      <Categories categoryData={categoryData} />
      <div className="productContainer">
        <Products categoryData={categoryData} />
      </div>
    </Container>
  );
};

export default Mains;
