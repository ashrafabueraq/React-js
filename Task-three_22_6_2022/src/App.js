import React from "react";
// import Title from "./classcomponent/title";
// import Card from "./classcomponent/cards";
 import Arrs from "./classcomponent/sorting";
// import Mapp from "./classcomponent/mapp";
// import Filterr from "./classcomponent/filtterr";
import Mapping from "./classcomponent/mapping";
import Searchh from "./classcomponent/searchh";
import Sorting from "./classcomponent/sorting";


class App extends React.Component {

  render(){
    return(
      <div className="container">

        <Mapping />    {/* Q:2 */}

        <Searchh />     {/* Q:3 */}  
         

          <Sorting />       {/* Q:1 */}


        {/* <Mapp />
        <Filterr />  */}


       {/* <Title />
       <Card /> */}

      </div>
    );
  }
}

export default App;
