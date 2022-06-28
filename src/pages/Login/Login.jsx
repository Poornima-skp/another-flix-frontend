import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utilities/users-service'

const Login = ({ setUser }) => {
    const [message, setMessage] = useState("We'll never share your email with anyone else.")
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        // Prevents form from being submitted to the server
        e.preventDefault()
        try {
            const user = await login(credentials)
            // once we get our user back, update our App.js userState with user firstName
            console.log(user)
            if (user) {
                setUser(user)
                // Redirect to movies after succeful login
                navigate('/movies');
            } else {
                throw new Error
            }
        } catch (e) {
            // console.log('did we error out')
            setMessage('Log in Failed - Try Again')
        }
    }
    return (
        <div>
            <form className='mx-auto w-50 border p-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name='email'
                        onChange={handleChange}
                        value={credentials.email}
                    />
                    <div id="emailHelp" className="form-text">{message}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name='password'
                        onChange={handleChange}
                        value={credentials.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
