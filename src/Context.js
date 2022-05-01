import { createContext, useState } from "react";
export const CatogoryForProducts = createContext();

const Context = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    categoryId: "151",
    categoryName: "Skin",
  }); //default Category is Skin
  return (
    <CatogoryForProducts.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </CatogoryForProducts.Provider>
  );
};

export default Context;
