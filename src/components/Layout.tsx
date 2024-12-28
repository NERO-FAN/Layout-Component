import React from "react";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import "./Layout.css";

const Layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="layout-container">
        <Sidebar />
        <div className="nav-children-container">
          <Navbar />
          <main className="children-container">
            { children }
          </main>
        </div>
    </div>
  )
}

export default Layout