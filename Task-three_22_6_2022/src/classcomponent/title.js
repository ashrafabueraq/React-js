import React from "react";


class Title extends React.Component{

     Welcome() {

        return(
            <h1>welcome to our site </h1>
        );
        
    }

render(){
    return(

        <div className="navbar bg-dark text-white">{this.Welcome()}</div>
       
    );
}

}

export default Title;