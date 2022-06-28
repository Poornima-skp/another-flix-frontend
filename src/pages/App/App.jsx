import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
//  Components
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Movies from '../Movies/Movies';
import CreateMovie from '../CreateMovie/CreateMovie';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import UpdateMovieform from '../../components/UpdateMovie/UpdateMovie';
// Services
import * as usersService from '../../utilities/users-service'
// CSS
import './App.css';

const App = () => {
  const [user, setUser] = useState('')
  // console.log('We are in App', usersService)
  // console.log(user)
  useEffect(() => {
    if (usersService.getToken()) {
      setUser(usersService.getUser())
    }

  }, [])

  // console.log('hello', user)

  return (

    <div className="App">
      <Nav user={user} setUser={setUser} logout={usersService.logout} />

      {/* Client-side route that renders the component instance if the path mathches the url in the address bar */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<SignUp setUser={setUser} />} />
        {
          user && 
          <>
            <Route path='/movies' element={user && <Movies />} />
            <Route path='/movies/create' element={user && <CreateMovie />} />
            <Route path='/movies/:id' element={user && <MovieDetails />} />
            <Route path='/movies/:id/edit' element={user && <UpdateMovieform />} /> 
          </>
        }
        
        {/* {
          user && <Route path='/movies' element={<Movies />} />
        } */}
        
      </Routes>

      <div className="fixed-bottom">
        <Footer />
     </div>

    </div>



  );
}

export default App;
