import React from "react";
import {useState} from "react";

function Searchh() {

    const [searchTerm, setSearchTerm] = useState("")

    const names = ["ashraf", "ahmad", "khaled", "basil", "aiman", "lujain", "yousef", "hala", "alaa"]


    return (

        <div>

            <input type="text" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            {names.filter((names)=>{
                if (searchTerm === ""){
                    return names
                }else if (names.toLowerCase().includes(searchTerm.toLowerCase())){
                    return names
                }

            }).map((names) => <p> {names} </p>)}

        </div>

    );
}

export default Searchh;