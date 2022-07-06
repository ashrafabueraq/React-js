import React, {useState, CreateContext, createContext, useEffect} from "react";




export const AuthContext = createContext();


export function AuthProvider(props){

    const [auth, setAuth] = useState({})


    useEffect(() =>{
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (email && password){
            setAuth({
                email,
                password
            })
        }

    })

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {props.children}

        </AuthContext.Provider>
    );

}