import { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'

const SignUp = ({setUser}) => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        picture: '',
        phone: '',
        age: 0,
        email: '',
        password: '',
        repassword: '',
        active: true
    });

    const navigate = useNavigate()

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const user = await signUp(newUser)
            console.log(user)
            setUser(user)
            if(user) navigate('/movies')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" className="img-fluid" />
                                </div>
                                <form className="col-xl-6" onSubmit={handleSubmit}>
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Sign Up</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1m"
                                                        className="form-control form-control-lg"
                                                        name='firstName'
                                                        value={newUser.firstName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1n"
                                                        className="form-control form-control-lg"
                                                        name='lastName'
                                                        value={newUser.lastname}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-2 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="number"
                                                        id="form3Example1m1"
                                                        className="form-control form-control-lg"
                                                        name='age'
                                                        value={newUser.age}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1m1">Age</label>
                                                </div>
                                            </div>
                                            <div className="col-md-5 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1n1"
                                                        className="form-control form-control-lg"
                                                        name='phone'
                                                        value={newUser.phone}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1n1">Phone Number</label>
                                                </div>
                                            </div>

                                            <div className="col-md-5 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Example1n1"
                                                        className="form-control form-control-lg"
                                                        name='picture'
                                                        value={newUser.picture}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1n1">Picture</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example8"
                                                className="form-control form-control-lg"
                                                name='email'
                                                value={newUser.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example8">Email</label>

                                            <input
                                                type="password"
                                                id="form3Example9"
                                                className="form-control form-control-lg"
                                                name='password'
                                                value={newUser.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example9">Password</label>

                                            <input
                                                type="password"
                                                id="form3Example10"
                                                className="form-control form-control-lg"
                                                name='repassword'
                                                value={newUser.repassword}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example10">Re-type Password</label>
                                        </div>
                                    </div>

                                    <button className='btn btn-primary' type='submit'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;