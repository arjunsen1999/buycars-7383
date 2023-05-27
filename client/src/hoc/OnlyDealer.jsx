import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function OnlyDealer({ children }) {
  const { auth } = useSelector((state) => state.Auth);
  if (auth?.role !== "dealer") {
    return <Navigate to="/login" />;
  }
  return children;
}
