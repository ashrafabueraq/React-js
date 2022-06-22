import React from "react";

class Filterr extends React.Component{

    numbers =[1,2,3,4,5,6,7,8,9,10]

    render(){
        return(

            <div className="bg-dark text-white">
                <h1>Using Filter Function</h1>
              <h2>  {this.numbers.filter((value)=>value % 3 === 0).join(" , ")}</h2>
              <h2>  {this.numbers.filter((value)=>value).join(" , ")}</h2>
            </div>

        );
    }

}

export default Filterr;