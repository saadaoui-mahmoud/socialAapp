import './login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social App.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" required/>
                        <input placeholder="Password" className="loginInput" required/>
                        <Link to="/Home">
                            <button className="loginButton">Log In</button>
                        </Link>
                        <span className="loginForgot">Forgot Password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
