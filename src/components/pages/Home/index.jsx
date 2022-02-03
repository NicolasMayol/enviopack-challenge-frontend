import { Typography } from "@mui/material";
import React from "react";
import { ProductContextProvider } from "../../../context/productProvider";
import { Products } from "../../templates/Products";

export default function Home() {
  return (
    <>
      <main>
        <Typography variant="h4">Catálogo</Typography>
        <ProductContextProvider>
          <Products />
        </ProductContextProvider>
      </main>
    </>
  );
}
