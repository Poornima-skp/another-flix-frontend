import { useState, useEffect } from 'react'
import { getMovies } from '../../utilities/movies-service'
import { logout } from '../../utilities/users-service';
import { Link, useNavigate } from 'react-router-dom'
import './Movies.css'
// import { getUser } from '../../utilities/users-service'

const Movies = () => {
    const [movies, setMovies] = useState([])
    // const [bool, setBool] = useState(false)

    const navigate = useNavigate()
    // useEffect below will invoke after every render
    // useEffect(() => {
    //     console.log('helloasdasd')
    // })

    // useEffect below will only run ONCE if the dependency array is empty
    // second arg of useEffect is the dependency array
    // Dependency array can have multiple dependencies. useEffect will listen to changes and will trigger again when a change happens
    useEffect(() => {
        // console.log('hello')
        // getMovies();
        // console.log(getUser());

        // IIFE - Immediately Invoked Function
        // ()(), we can put an anonymous function inside the first set of paranthesis and the second set of paranthesis will immediatly invoke that function
        (async () => {
            const moviesRes = await getMovies()
            setMovies(moviesRes.data)
        })()
    }, [])

    // Why we are using useEffect?
    // To make HTTP request the moment the component loads
    // Use case: We want to use an empty dependency array to prevent multiple requests to the server

    return (
        <>

            <Link className="btn btn-primary" id="Add-Movie" to='/movies/create'>Add Movie</Link>

            <div className="row row-cols-1 row-cols-md-2 g-4 h-100">

                {
                    movies.map(movie =>
                        <div className="col" id='movie-card' key={movie._id} onClick={() => navigate(`/movies/${movie._id}`, {state: movie})}>
                            <div className="card" >
                                <img src={movie.image} className="card-img-top" alt={`Movie poster: ${movie.title}`} id='movie-poster' />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.plot}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>

    )
}
{/* <button onClick={() => setBool(true)}>CLICK ME</button> */ }
{/* <button onClick = { logout }>LOGOUT</button> */ }
export default Movies;