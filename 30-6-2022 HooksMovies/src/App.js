import Home from "./component/home";
import Navbar from "./component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./component/movielist";
import About from "./component/about";
 import Single from "./component/singlemovie";




function App() {
  return (




    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="movielist" element={<MovieList />} />
          <Route path="about" element={<About />} />
           <Route path="/single/:id"  element={<Single />} /> 





        </Routes>

      </div>

    </BrowserRouter>



  );
}

export default App;
