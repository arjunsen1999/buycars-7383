import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import DealerSignup from "../pages/DealerSignup";
import DealerDashboard from "../pages/DealerDashboard";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import OnlyDealer from "../hoc/OnlyDealer";
import OnlyLoginUser from "../hoc/OnlyLoginUser";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dealer-signup" element={<DealerSignup />} />
        <Route
          path="/dashboard"
          element={
            <OnlyDealer>
              <DealerDashboard />
            </OnlyDealer>
          }
        />
        <Route path="/car/:id" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={
            <OnlyLoginUser>
              <Cart />
            </OnlyLoginUser>
          }
        />
      </Routes>
    </>
  );
}
