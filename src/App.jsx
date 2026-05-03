import Dashboard from "./components/dashboard/Dashboard"
import Footer from "./components/Footer"
import Navbar from "./components/Sidebar&Navbar/Navbar"
import Sidebar from "./components/Sidebar&Navbar/Sidebar"
// import Login from "./components/login/Login"
import './App.css'
import AddOperator from "./components/addoperator/AddOperator"
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {

  return (
      <div className="container1">
              {/* <Login /> */}
        <Sidebar/>
        <div className="main">
           <Navbar />
            <Outlet />
          <Footer />
        </div>
      </div>

  )
}

export default App
