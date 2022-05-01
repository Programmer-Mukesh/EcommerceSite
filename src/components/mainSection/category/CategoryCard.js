import React, { useContext } from "react";
import { CatogoryIdForProducts } from "../../../Context";

const CategoryCard = ({ category }) => {
  const { setCategoryId } = useContext(CatogoryIdForProducts);
  return (
    <div
      className="category-card-wrapper"
      style={{
        backgroundImage: `url(${category.category_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "150px 90px",
      }}
      onClick={() => setCategoryId(category.category_id)}
    >
      <div className="categoryName">{category.category_name}</div>
    </div>
  );
};

export default CategoryCard;
