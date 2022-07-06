import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./Login/AuthContext";
import {Header}  from "./Login/header";
import { Login } from "./Login/Login";


function App() {

 const authContext = useContext(AuthContext)

  return (
    <div className="container">

      <Header />
      {authContext.auth.email ? 'this is home page ' : <Login />}
      
    </div>
  );
}

function AppWithStore(){

  return(

    <AuthProvider>
    <App />
  </AuthProvider>

  );
  


}

export default AppWithStore;
