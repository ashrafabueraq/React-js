import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const api = 'https://api.themoviedb.org/3/movie/popular?api_key=03c49d6542d57de179aeb3a0836c5995';

function Home() {

    const [movie, setMovie] = useState([])

    useEffect(() => {

        fetch(api)
            .then((res) => res.json())
            .then(data => {
                setMovie(data.results);
                console.log(data);
            })
    }, []);

    return (
        <div className="row m-5 p-3" style={{backgroundColor:"#009688"}}>
            {

                movie.map(movie =>
                    <div key={movie.id} className="col-lg-4 mb-3 d-flex align-items-stretch">

                        <div className="card">

                            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="img" />
                            <div className="card-body d-flex flex-column">
                                <h4 className="card-title">{movie.original_title}</h4>
                                <p className="card-text mb-4 my-2">{movie.overview}</p>
                                <p style={{color:"blue"}}>Vote Avarage : {movie.vote_average}</p>

                                <p style={{color:"red"}}>Release Date : {movie.release_date}</p>
                                 <Link to={'/single/'+movie.id} className="btn btn-primary mt-auto align-self-start">Book now</Link> 

                            </div>
                        </div>


                    </div>)

            }
        </div>
    );
}

export default Home;