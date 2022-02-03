import { createContext, useState } from "react";

const defaultValue = [{}]
const ProductProvider = createContext();

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState(defaultValue);

  return (
    <ProductProvider.Provider value={{ product, setProduct }}>
      {children}
    </ProductProvider.Provider>
  );
};

export default ProductProvider;