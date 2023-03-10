import React, {ReactNode, useEffect} from "react";
import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";

type RouterProps = {
  redirectPath: String,
  children: ReactNode
}

const AuthPages = ({ redirectPath = "/login", children }) => {

  let isLogin = false;

  if(localStorage.getItem('islogin') == 'true'){
      isLogin = true
  }else{
    isLogin = false
  }
  
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
};

export default AuthPages;