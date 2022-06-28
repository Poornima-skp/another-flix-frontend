import { useLocation, useNavigate } from 'react-router-dom'
import { deleteMovie } from '../../utilities/movies-service'

const MovieDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const movieDetails = location.state

    // console.log(location.state)

    // console.log(location)

    const handleDelete = async () => {
        try {
            const res = await deleteMovie(movieDetails._id)
            if (res.status === 200) navigate('/movies')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <img src={movieDetails.image} alt="" />
            <p>Title: {movieDetails.title}</p>
            <p>Content Rating: {movieDetails.contentRating}</p>
            <button
                className='btn btn-primary'
                onClick={() => navigate(`/movies/${movieDetails._id}/edit`, { state: movieDetails })}
            >
                Edit
            </button>
            <button
                className='btn btn-danger'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default MovieDetails;