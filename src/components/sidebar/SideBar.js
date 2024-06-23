import React, { useState } from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";
import { Link, Outlet } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import MainContent from "../MainContent";

const MENU_ITEM = ["Users", "Products", "Carts"];

const SideBar = () => {
  const [closeOtherItems, setCloseOtherItems] = useState([true, true, true]);

  const closeOtherItem = (index) => {
    console.log("Inside close otheritem" + index);
    for (var i = 0; i < MENU_ITEM.length; i++) {
      if (index != 1) {
        let temp = [...closeOtherItems];
        temp[i] = true;
        setCloseOtherItems(temp);
      } else {
        let temp = [...closeOtherItems];
        temp[i] = false;
        setCloseOtherItems(temp);
      }
    }
  };
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/user-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/product-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cart-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Carts</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className="SideContent" style={{ width: "calc(100% - 150px)" }}>
        <Header></Header>
        <MainContent></MainContent>
      </div>
    </div>
  );
};

export default SideBar;
