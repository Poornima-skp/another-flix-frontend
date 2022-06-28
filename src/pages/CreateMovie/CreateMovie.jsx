import { useState } from 'react';
import * as moviesService from '../../utilities/movies-service'
import { useNavigate } from 'react-router-dom'
import './CreateMovie.css'

const CreateMovie = () => {

    // If you don't specifically define object properties in your state, if you set your state anywhere in your code, it will automatically create the state object property for you.
    const [movieDetails, setMovieDetails] = useState({
        title: '',
        genre: '',
        year: 0,
        plot: '',
        image: '',
        contentRating: '',
        imDbRating: 0,
        runtimeMins: 0
    })
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setMovieDetails({
            ...movieDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        moviesService.createMovie(movieDetails)
        navigate('/movies')
    }

    // console.log(movieDetails)
    return (
        <div>
            <form className="row g-3" id="create-movie-form" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputTitle4" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control" id="inputTitle4"
                        name='title'
                        onChange={handleChange}
                        value={movieDetails.title}
                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputGenre4" className="form-label">Genre</label>
                    <input 
                    type="text" 
                    className="form-control" id="inputGenre4"
                        name='genre'
                        onChange={handleChange}
                        value={movieDetails.genre}
                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="inputGenre4" className="form-label">Year</label>
                    <input
                        type="number"
                        className="form-control" id="inputGenre4"
                        name='year'
                        onChange={handleChange}
                        value={movieDetails.yesr}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPlot" className="form-label">Plot</label>
                    <input 
                    type="text" 
                    className="form-control" id="inputPlot" 
                    placeholder="Movie Description"
                        name='plot'
                        onChange={handleChange}
                        value={movieDetails.plot}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputImage" className="form-label">Image</label>
                    <input 
                    type="text" 
                    className="form-control" id="inputImage" 
                        name='image'
                        onChange={handleChange}
                        value={movieDetails.image}
                    />
                </div>

                <div className="col-md-2">
                    <label htmlFor="inputContentRating" className="form-label">ContentRating</label>
                    <input 
                    type="text" 
                    className="form-control" id="inputContentRating" 
                        name='contentRating'
                        onChange={handleChange}
                        value={movieDetails.contentRating}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputIMDBRating" className="form-label">IMDBRating</label>
                    <input 
                    type="text" 
                    className="form-control" id="inputIMDBRating"
                        name='imDbRating'
                        onChange={handleChange}
                        value={movieDetails.imDbRating}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputRuntimeMins" className="form-label">RuntimeMins</label>
                    <input 
                    type="text" 
                    className="form-control" id="inputRuntimeMins" 
                        name='runtimeMins'
                        onChange={handleChange}
                        value={movieDetails.runtimeMins}
                    />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Create Movie</button>
                </div>
            </form>
        </div>
    );
}

export default CreateMovie;
