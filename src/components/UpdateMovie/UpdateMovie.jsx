import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as moviesService from '../../utilities/movies-service'

const UpdateMovieForm = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const movie = location.state

    const [movieDetails, setMovieDetails] = useState(movie)

    // console.log(location.state)

    const handleChange = e => {
        setMovieDetails({
            ...movieDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await moviesService.updateMovie(movieDetails)
            // console.log(res)
            if (res.status === 200) navigate(`/movies/${movieDetails.id}`, { state: movieDetails })
        } catch (e) {
            console.log(e)
        }
    }

    // console.log(movieDetails)
    return (
        <form className="row g-3" id='create-movie-form' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputTitle4" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputTitle4"
                    name='title'
                    onChange={handleChange}
                    value={movieDetails.title}
                    placeholder={movie.title}
                />
            </div>
            <div className="col-md-3">
                <label htmlFor="inputGenre4" className="form-label">Genre</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputGenre4"
                    name='genre'
                    onChange={handleChange}
                    value={movieDetails.genre}
                />
            </div>
            <div className="col-md-3">
                <label htmlFor="inputGenre4" className="form-label">Year</label>
                <input
                    type="number"
                    className="form-control"
                    id="inputGenre4"
                    name='year'
                    onChange={handleChange}
                    value={movieDetails.year}
                />
            </div>
            <div className="col-12">
                <label htmlFor="inputPlot" className="form-label">Plot</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputPlot"
                    placeholder="Movie description..."
                    name='plot'
                    onChange={handleChange}
                    value={movieDetails.plot}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputImage" className="form-label">Image</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputImage"
                    name='image'
                    onChange={handleChange}
                    value={movieDetails.image}
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputContentRating" className="form-label">Content Rating</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputContentRating"
                    name='contentRating'
                    onChange={handleChange}
                    value={movieDetails.contentRating}
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputIMDBrating" className="form-label">IMDB Rating</label>
                <input
                    type="number"
                    className="form-control"
                    id="inputIMDBrating"
                    name='imDbRating'
                    onChange={handleChange}
                    value={movieDetails.imDbRating}
                />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputRuntimeMins" className="form-label">Runtime Mins</label>
                <input
                    type="number"
                    className="form-control"
                    id="inputRuntimeMins"
                    name='runtimeMins'
                    onChange={handleChange}
                    value={movieDetails.runtimeMins}
                />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Update Movie</button>
            </div>
        </form>
    )
}

export default UpdateMovieForm;