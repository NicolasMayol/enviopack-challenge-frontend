import React, { useContext, useEffect } from "react";
import UserProvider from "../../context/userProvider";
import UserApi from "../../service/userApi";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const contextUser = useContext(UserProvider);

  const getUser = async () =>{
    const res = await UserApi.get("/");
    contextUser.setUser(res.data);
  }

  useEffect(() => {
    getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography>Tienda de productos</Typography>
          </Link>
          <Box>
            <Typography>{contextUser.user.firstName}</Typography>
            <Link to="/carrito">
              <Typography>Carrito</Typography>
            </Link>
            <Link to="/credito">
              <Typography>Crédito $ {contextUser.user.credit}</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
