import axios from "axios";

const ProductsApi = axios.create({
  baseURL: "http://localhost:3004/productos",
});

export default ProductsApi;