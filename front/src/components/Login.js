import Twitter from './Icons/Twitter';
import './Login.css';

function Login() {
  return (
    <div className="Register-wrapper">
      <div className="Register-left">
        <Twitter class="Register-left-img" />
      </div>
      <div className="Register-right">
        <div className="Register-right-content">
          <Twitter class="Register-right-icon" />
          <h2 className="Register-right-title">Happening now</h2>
          <span className="Register-right-text">Sing in to Twitter</span>
          <form className="Register-right-form">
            <input type="text" name="login" placeholder="Login" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <span className="Register-right-desc">Don't have an account? <span className="Register-right-desc-link">Register</span></span>
        </div>
      </div>
    </div>

  )
}

export default Login