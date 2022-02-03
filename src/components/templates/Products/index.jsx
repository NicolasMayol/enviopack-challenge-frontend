import React, { useContext, useEffect } from "react";
import ProductProvider from "../../../context/productProvider";
import ProductsApi from "../../../service/productsApi";
import { CardProduct } from "../../atoms/CardProduct";

export const Products = () => {
  const contextProduct = useContext(ProductProvider);

  const getData = async () => {
    const res = await ProductsApi.get("/");
    contextProduct.setProduct(res.data);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {contextProduct.product.map((x,i) => (
        <CardProduct
         key={i}
         title={x.title} 
         price={x.price} />
      ))}
    </>
  );
};
