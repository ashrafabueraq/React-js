import React from "react";
import Title from "./classcomponent/title";
import Card from "./classcomponent/cards";

class App extends React.Component {



  render(){
    return(
      <div className="container">
       <Title />
       <Card />

      </div>
    );
  }
}

export default App;
