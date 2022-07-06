import React,{useContext} from "react";

import { AuthContext } from "./AuthContext";

export function Header(){

 const authContext = useContext(AuthContext)

 function Logout(){

    authContext.setAuth({})
    localStorage.removeItem('email')
    localStorage.removeItem('password')

 }


    return(

        <nav className="navbar navbar-light bg-dark mt-2 mb-2">

            <a className="navbar-brand" style={{color:"white"}}>Gym</a>

            <div style={{color:"white"}}>
                {authContext.auth.email ?  <div> {authContext.auth.email}
                    {' '}

                    <button className="btn btn-danger" onClick={Logout}>LogOut</button>
                </div> : 'you need to login'}
                
            </div>

        </nav>

    );
}