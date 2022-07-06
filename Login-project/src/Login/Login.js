import React,{useContext, useState} from "react";
import { AuthContext } from "./AuthContext";


export function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
     const authContext = useContext(AuthContext)



    function validate(e){
        e.preventDefault();

        // send api request to validate data and get token form axios
        // console.log({email ,password});

        if(email === 'ashraf@ashraf.com' &&  password === '123'){

            localStorage.setItem('email', email);
            localStorage.setItem('password', password)
            authContext.setAuth({email, password})

        }else{
            alert('invalid in email or password')
        }
    }


    return(
        <form>
            <h2>Login</h2>
            <input type="email" className="form-control" placeholder="email" onChange={e => setEmail(e.target.value)}/> <br />

            <input type="password" className="form-control" placeholder="password"  onChange={e => setPassword(e.target.value)}/> <br />

            <button className="btn btn-primary" onClick={validate}>Sign in</button>
        </form>
    );
}