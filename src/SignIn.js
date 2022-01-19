import React, { Component } from "react";
import Form from "./Form";
import Header from "./Header";
import "./sass/SignIn.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
      newEmail: "",
      newPassword: "",
    };
  }

  handleFormSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      newPassword: "",
      newEmail: "",
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      confirmPassword,
      newEmail,
      newPassword,
    } = this.state;
    return (
      <div className="SignIn">
        <Header />
        <div className="sign-in-and-sign-up">
          <div className="sign-in">
            <h2 className="title animated fadeInUp">
              I already have an account
            </h2>
            <span className="sub-title animated fadeInUp">
              Sign in with your email and password
            </span>

            <form
              onSubmit={() => {
                this.handleSubmit();
                this.handleFormSubmit();
              }}
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Form
                name="email"
                type="email"
                handleChange={this.handleChange}
                value={this.state.email}
                label="Email"
                required
              />
              <Form
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
                required
              />
              <input type="hidden" name="form-name" value="contact" />
              <div className="buttons">
                <button className="custom-button">Sign In</button>
                <button className="google-button">Sign In With Google</button>
              </div>
            </form>
          </div>
          <div className="sign-up">
            <h2 className="title animated fadeInUp">I do not have a account</h2>
            <span className="sub-title animated fadeInUp">
              Sign up with your email and password
            </span>
            <form
              className="sign-up-form"
              onSubmit={() => {
                this.handleSubmit();
                this.handleFormSubmit();
              }}
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Form
                type="text"
                value="name"
                name="displayName"
                label="Display Name"
                value={displayName}
                onChange={this.handleChange}
                required
              />
              <Form
                type="email"
                name="newEmail"
                value={newEmail}
                onChange={this.handleChange}
                label="Email"
                required
              />
              <Form
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={this.handleChange}
                label="Password"
                required
              />
              <Form
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
              />
              <input type="hidden" name="form-name" value="contact" />
              <button className="custom-button">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
