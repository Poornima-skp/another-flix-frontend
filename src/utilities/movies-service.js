import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'https://anotherflix.onrender.com/api/v1/movies'


const setOptions = () => {
    return {
        headers: {
            // We are attaching the token to our Authorization header
            //  Prefacing with 'Bearer' is recommended in HTTP specification
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }
    }
}

export const getMovies = async () => {
    try {
        const response = await axios.get(BASE_URL, setOptions())
        // console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const createMovie = async movieDetails => {
    try {
        const createdMovie = await axios.post(BASE_URL, movieDetails, setOptions())
        return createdMovie
    } catch (e) {
        console.log(e)
    }
}

export const updateMovie = async newMovieDetails => {
    try {
        // console.log(newMovieDetails)
        const updatedMovie = await axios.put(`${BASE_URL}/${newMovieDetails._id}`, newMovieDetails, setOptions())
        return updatedMovie
    } catch (e) {
        console.log(e)
    }
}

export const deleteMovie = async id => {
    try {
        const deletedMovie = await axios.delete(`${BASE_URL}/${id}`, setOptions())
        return deletedMovie
    } catch (e) {
        console.log(e)
    }
}