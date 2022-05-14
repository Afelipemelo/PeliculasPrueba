import React, { useEffect } from "react";
import NavBarIndex from "./login/NavBarIndex";
import { useDispatch, useSelector } from "react-redux";
import login_action from "../Redux/action/login_action";
import ProximosEstrenos from "./ProximosEstrenos";
import "../Slider.css";
import { Navigate } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.isLogin);

  useEffect(() => {
    dispatch(login_action(false));
  }, []);

  return !isLogin ? (
    <>
      <ProximosEstrenos />
      <NavBarIndex />
    </>
  ) : (
    <Navigate to="/home" />
  );
};
export default Index;
