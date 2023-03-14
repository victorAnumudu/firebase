import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

import { useNavigate } from "react-router-dom";

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // for firebase authentication



let AuthContext = createContext({});

type UserDetails = {
    loggedIn: boolean;
    email: string;
  }

type ValueType = {
    userDetails: UserDetails,
    setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>,
  }

//   type CreateUserType = {
//     status: Boolean,
//     message: String
//   }

export const AuthProvider : React.FC<{ children: ReactNode }>= ({children}) => {
  let navigate = useNavigate();

  // active user details
  let [userDetails, setUserDetails] = useState<UserDetails>({
    loggedIn: (localStorage.getItem('islogin') == 'true') ? true : false,
    email: "",
  });

//   const createUser = (email:string, password:string):any => {
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user)
//         // ...
//         return {status: true, message:'User Created sucessfully'}
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         return {status: false, message:`${error.message}`}
//       });
//   }

  //Checking if user is logged in
  useEffect(() => {
    const checkIsLoggedIn = ():void => {
        if(localStorage.getItem('islogin') == 'true'){
            setUserDetails({
                loggedIn: true,
                email: "",
              })
        }else{
            setUserDetails({
                loggedIn: false,
                email: "",
              })
        }
    }
    checkIsLoggedIn()
  }, []);


  // values for the context provider
  let values:ValueType = {
    userDetails,
    setUserDetails,
  };
  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};

export const Authenticate = () => {
  return useContext(AuthContext);
};
