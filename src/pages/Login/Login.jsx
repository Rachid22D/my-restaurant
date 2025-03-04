
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={`section1 login-section py-5 ${styles.loginSection}`}>
      <div className="container">
        <h1 className="text-center mb-5">Welcome Back</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form action="#" method="post" className={`login-form ${styles.loginForm}`}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="text-center mb-3">
                <button type="submit" className="btn btn-warning">
                  Login Now
                </button>
              </div>
              <p className="text-center">
                {"Don't have an account?"}{' '}
                <Link to="/register" className="text-warning">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
