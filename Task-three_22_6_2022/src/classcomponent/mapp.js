import React from "react";


class  Mapp extends React.Component{

    numbers =[1,2,3,4,5,6]
    render(){
    
        const names =["Ashraf", "Qutaibah", "Basil", "Ahmad"]
        return(

       <div  className="bg-dark text-white">

        <h1>Using Map Function</h1>
        <h2> {this.numbers.map((value)=>value*2).join(' , ')} </h2>
        <h2> {this.numbers.map((value)=>value).join(' , ')} </h2>

        <ul>
            {names.map((names)=>(<li>{names}</li>))}
            
        </ul>

       </div>

        );
    }

}

export default Mapp;