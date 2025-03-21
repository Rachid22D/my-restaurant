import { Link } from 'react-router-dom';
import styles from './Register.module.css';

// Component for the registration page
const Register = () => {
  return (
    <section className={`section1 register-section py-5 ${styles.registerSection}`}>
      <div className="container">
        <h1 className="text-center mb-5">Create Your Account</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* Registration form */}
            <form action="#" method="post" className={`register-form ${styles.registerForm}`}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
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
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter a password"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">Sign Up</button>
              </div>
              <p className="text-center">
                Already have an account{' '}
                <Link to="/login" className="text-warning">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
