import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function OnlyLoginUser({ children }) {
  const { auth } = useSelector((state) => state.Auth);
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
}
