import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  demoSubmit() {
    this.props.processForm({ email: "hire@me.com", password: "password" });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form-page">
          <div className="login-signup-nav">
            <Link to="/" className="nav-bar">
              <p className="login-sign-up-name">Bytes</p>
              <i className="fab fa-yelp fa-lg"></i>
            </Link>
          </div>

          <div className="form-content">
            <div className="session-container">
              <h2>Log in to Bytes</h2>
              <p className="subheading">
                New to Bytes?{" "}
                <Link to="/signup" className="blue-link">
                  Sign Up
                </Link>
              </p>
              <p className="legal">
                By logging in, you agree to Bytes'
                <Link to="#">Terms of Service</Link> and
                <Link to="#">Privacy Policy</Link>
              </p>
              <form className="session-form">
                <input
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update("email")}
                />

                <input
                  type
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                <Link to="#" className="align-right">
                  Forgot password?
                </Link>
                <button
                  className="signup-login-btn"
                  onClick={this.handleSubmit}
                >
                  Log In
                </button>
                <p className="align-right">
                  New to Bytes? <Link to="/signup">Sign Up</Link>
                </p>
                <div className="middle-or">
                  <h3 id="line">OR</h3>
                </div>
                <button className="signup-login-btn" onClick={this.demoSubmit}>
                  Demo Log In
                </button>
              </form>

              {this.props.errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </div>
            <img
              id="signup-login-logo"
              src={window.signuplogin}
              width="300"
              height="300"
            />
          </div>
          <div className="footer">
            <div className="footer-links">
              <div className="col-one col">
                <p className="col-title">About</p>
                <br />
                <Link to="#" className="col-content">
                  About Yelp
                </Link>
                <Link to="#" className="col-content">
                  Careers
                </Link>
                <Link to="#" className="col-content">
                  Press
                </Link>
                <Link to="#" className="col-content">
                  Investor Relations
                </Link>
                <Link to="#" className="col-content">
                  Content Guidelines
                </Link>
                <Link to="#" className="col-content">
                  Accessibility Statement
                </Link>
                <Link to="#" className="col-content">
                  Terms of Service
                </Link>
                <Link to="#" className="col-content">
                  Privacy Policy
                </Link>
                <Link to="#" className="col-content">
                  Ad Choices
                </Link>
              </div>
              <div className="col-two col">
                <p className="col-title">Discover</p>
                <br />
                <Link to="#" className="col-content">
                  Yelp Project Cost Guides
                </Link>
                <Link to="#" className="col-content">
                  Collections
                </Link>
                <Link to="#" className="col-content">
                  Talk
                </Link>
                <Link to="#" className="col-content">
                  Events
                </Link>
                <Link to="#" className="col-content">
                  The Local Yelp
                </Link>
                <Link to="#" className="col-content">
                  Yelp Blog
                </Link>
                <Link to="#" className="col-content">
                  Support
                </Link>
                <Link to="#" className="col-content">
                  Yelp Mobile
                </Link>
                <Link to="#" className="col-content">
                  Developers
                </Link>
              </div>
              <div className="col-three col">
                <p className="col-title">Yelp for Business</p>
                <br />
                <Link to="#" className="col-content">
                  Claim your Business Page
                </Link>
                <Link to="#" className="col-content">
                  Advertise on Yelp
                </Link>
                <Link to="#" className="col-content">
                  Yelp for Resturant Owners
                </Link>
                <Link to="#" className="col-content">
                  Table Management
                </Link>
                <Link to="#" className="col-content">
                  Business Success Stories
                </Link>
                <Link to="#" className="col-content">
                  Business Support
                </Link>
                <Link to="#" className="col-content">
                  Yelp Blog for Business
                </Link>
              </div>
              <div className="col-four col">
                <p className="col-title">Languages</p>
                <br />
                <Link to="#" className="col-content">
                  English
                </Link>
                <br />
                <p className="col-title">Countries</p>
                <br />
                <Link to="#" className="col-content">
                  United States
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
