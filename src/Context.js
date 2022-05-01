import { createContext, useState } from "react";
export const CatogoryIdForProducts = createContext();

const Context = ({ children }) => {
  const [categoryId, setCategoryId] = useState(151); //default id is for Skin Category
  return (
    <CatogoryIdForProducts.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </CatogoryIdForProducts.Provider>
  );
};

export default Context;
