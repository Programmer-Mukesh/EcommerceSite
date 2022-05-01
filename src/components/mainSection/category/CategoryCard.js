import React, { useContext } from "react";
import { CatogoryForProducts } from "../../../Context";

const CategoryCard = ({ category }) => {
  const { setSelectedCategory } = useContext(CatogoryForProducts);
  return (
    <div
      className="category-card-wrapper"
      style={{
        backgroundImage: `url(${category.category_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "150px 90px",
      }}
      onClick={() =>
        setSelectedCategory({
          categoryId: category.category_id,
          categoryName: category.category_name,
        })
      }
    >
      <div className="categoryName">{category.category_name}</div>
    </div>
  );
};

export default CategoryCard;
