
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/Auth/authSlice'
import Spinner from '../components/Spinner'
import "../components/Login.css"
function Login() {

    const [formData, setFormData] = useState({

        email: '',
        password: '',

    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } =
        useSelector(
            (state) => state.auth
        )


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        else if (user?.isAdmin) {
            navigate("/adminAndHost")
        }
        else if (user?.isHost) {
            navigate("/adminAndHost")
        }
        else if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <div className='outer'>
               <div className='inner'>
                     
                <section className="heading">
                    <h1>
                        <FaSignInAlt />Login
                    </h1>
                    <p>Login</p>
                </section>
                <section className="form">
                    <form onSubmit={onSubmit}>

                        <div className="form-group">
                            <input
                                type="email" className="form-control"
                                id="email" name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password" className="form-control"
                                id="password" name="password"
                                value={password}
                                placeholder="Enter password"
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-froup">
                            <button type="submit" className=' btn btn-block'>Submit</button>
                        </div>
                    </form>
                </section>
                </div>  
            </div>
        </>
    )
}

export default Login
