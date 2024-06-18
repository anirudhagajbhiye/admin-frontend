import React from "react";
import ProductList from "../pages/products/products-list";
import { Outlet, Route, Routes } from "react-router-dom";
import UserList from "../pages/users/user-list";
import NewUser from "../pages/users/new-users";
import EditUser from "../pages/users/edit-users";
import NewProduct from "../pages/products/new-products";
import EditProduct from "../pages/products/edit-products";
import Layout from "../Layout";

const MainContent = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<UserList />} />
          <Route path="new-user" element={<NewUser />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="user-list" element={<UserList />} />

          <Route path="new-product" element={<NewProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
};

export default MainContent;
