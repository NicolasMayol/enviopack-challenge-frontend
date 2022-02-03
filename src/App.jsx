import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/userProvider";
import Layout from "./components/layout";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/carrito" element={<CarShep />} />
          <Route path="/credito" element={<Credit />} /> */}
          </Routes>
        </Layout>
      </UserContextProvider>
    </BrowserRouter>
  );
}
