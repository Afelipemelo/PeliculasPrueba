import React, { useEffect } from "react";
import NavBarIndex from "./NavBarIndex";
import { useDispatch, useSelector } from "react-redux";
import login_action from "../../redux/actions/login_action";
import { Navigate } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.isLogin);

  useEffect(() => {
    dispatch(login_action(false));
  }, []);

  return !isLogin ? (
    <>
      <NavBarIndex />
    </>
  ) : (
    <Navigate to="/home" />
  );
};
export default Index;
