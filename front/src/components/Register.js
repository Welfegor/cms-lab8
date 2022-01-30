import Twitter from './Icons/Twitter';
import './Register.css';

function Register() {
  return (
    <div className="Register-wrapper">
      <div className="Register-left">
        <Twitter class="Register-left-img" />
      </div>
      <div className="Register-right">
        <div className="Register-right-content">
          <Twitter class="Register-right-icon" />
          <h2 className="Register-right-title">Happening now</h2>
          <span className="Register-right-text">Join Twitter today.</span>
          <form className="Register-right-form">
            <input type="text" name="login" placeholder="Login" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="rpassword" placeholder="Repeat Password" />
            <button type="submit">Register</button>
          </form>
          <span className="Register-right-desc">Already have an account? <span className="Register-right-desc-link">Sign in</span></span>
        </div>
      </div>
    </div>

  )
}

export default Register