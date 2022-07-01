import { useEffect, useState } from "react";

const api = 'https://api.themoviedb.org/3/movie/popular?api_key=03c49d6542d57de179aeb3a0836c5995';


function MovieList() {

    const [list, setList] = useState([]);

    useEffect(() => {

        fetch(api)
            .then((res) => res.json())
            .then(data => {
                setList(data.results);
                console.log(data);
            })
    }, []);

    return (

        <div>

            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NameMovie</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                
                {
                    list.map(list =>
                      
                        <tr key={list.id}>
                            <td>{list.id}</td>
                            <td>{list.original_title}</td>
                            <td>{list.overview}</td>
                            <td> <img src={'https://image.tmdb.org/t/p/w500' + list.poster_path} alt="img" height="150px" width="150px" /></td>
                        </tr>
                        
                    )
                }
                </tbody>
           
            </table >

        </div>

    );
}

export default MovieList;




