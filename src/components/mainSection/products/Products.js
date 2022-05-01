import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { CatogoryIdForProducts } from "../../../Context";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const { categoryId } = useContext(CatogoryIdForProducts);

  const getProducts = async () => {
    try {
      const apiResponse = await axios.get(
        `https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categoryId}`
      );
      setProductData(apiResponse.data.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <div className="productCardMapped">
      {productData.length > 0 &&
        productData.map((prod) => <ProductCard product={prod} key={prod.id} />)}
    </div>
  );
};

export default Products;
