import React from "react";
import { Container } from "@mui/material";
import CategoryCard from "./CategoryCard";
import "../../../styles/categories.scss";

const containerStyles = {
  "@media(max-width:767px)": {
    padding: "0px",
  },
};

const Categories = ({ categoryData }) => {
  return (
    <Container className="categoriesWrapper" sx={containerStyles}>
      <h2 className="h2Heading">Our Products</h2>
      <div className="flexBar">
        {categoryData.length > 0 &&
          categoryData.map((category) => (
            <CategoryCard category={category} key={category.category_id} />
          ))}
      </div>
    </Container>
  );
};

export default Categories;
