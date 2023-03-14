import React, {ReactNode, useEffect} from "react";
import { Navigate, Outlet, To } from "react-router-dom";

import { Authenticate } from "../context/Auth"; // authentication useContext

type RouterProps = {
  redirectPath: String,
  children: ReactNode | JSX.Element
}

const AuthPages = ({ redirectPath = "/login", children }:RouterProps):JSX.Element | null => {

  const { userDetails }:any = Authenticate()

  let isLogin = userDetails.loggedIn;
  
  if (!isLogin) {
    return <Navigate to={redirectPath as To} replace />;
  }
  
  return (<>
    {<Outlet />}
    </>);
};

export default AuthPages;