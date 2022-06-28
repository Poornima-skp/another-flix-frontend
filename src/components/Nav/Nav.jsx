import { Link } from 'react-router-dom'

const Nav = ({ user, setUser, logout }) => {

    // console.log(user)
    const handleLogout = ()  => {
        setUser(null)
        logout()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand col" to="/">LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {
                            user ?
                                <>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/movies">Movies</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={handleLogout} to='/' >Logout</Link>
                                        </li>
                                    </ul>
                                </>
                                :
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">Sign Up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </ul>

                        }



                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;