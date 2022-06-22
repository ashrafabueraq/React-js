import React from "react";

class Sorting extends React.Component {

  
        numbers=["Z","A","Q", "B", "C","Y", "S", "W"]
    
    render() {

        return (

            <div>
                <div className="bg-dark text-white">

                    <h1>The sorted array is: </h1>
                    <h2>{this.numbers.sort().join(" , ")}</h2>
                    {/* <h2>{this.numbers}</h2> */}
                    

                </div>



            </div>



        );
    }
}

export default Sorting;