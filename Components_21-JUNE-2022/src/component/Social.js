import React from "react";
import Html from "./images/html.png";
import Css from "./images/css.png";
import Js from "./images/js.png";



function Social() {

  return (
    <div className="para">

      <ul className="list-group">
      

        <li className="list-group-item">
        <img src={Html} alt="html" height={100} width={100}/>               {/* from the same  folder src */} 
        {/* <img src="images/js.jpg" alt="html" height={100} width={100}/>   from folder public */}
       
       
          <input type="checkbox" id="html" />
          <label for="html"> HTML</label>
        </li>

        <li className="list-group-item">
        <img src={Css} alt="css" height={100} width={100}/>
          <input type="checkbox" id="html" />
          <label for="html"> CSS</label>
        </li>


        <li className="list-group-item">
        <img src={Js} alt="js" height={100} width={100}/>
          <input type="checkbox" id="html" />
          <label for="html"> JavaScript</label>
        </li>

      </ul>
    </div>

  );
}

export default Social;