import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const isAuth = user?._id;

  return isAuth ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace
      state={{
        from: location,
      }}
    />
  );
};
