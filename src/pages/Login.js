import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoURAS2kwFuhokGfqgGJ2oUWV95Mnw0r0",
  authDomain: "react-grammar-app.firebaseapp.com",
  projectId: "react-grammar-app",
  storageBucket: "react-grammar-app.appspot.com",
  messagingSenderId: "797313993235",
  appId: "1:797313993235:web:8203ccedbe7110ae34cde6",
};
class Login extends Component {
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    this.state = { email: "", password: "", redirect: null };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePassChange(e) {
    this.setState({ password: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    var flag = 0;

    console.log(email, password);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });

    await firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        flag = 1;
      } else {
        alert("Wrong Credentials");
        flag = 0;
      }
    });

    if (flag === 1) {
      this.setState({ redirect: "/app" });
    }

    // if (flag === 1) {
    //   this.setState({ redirect: null });
    // }
    // if (email !== "" && password !== "" && flag === 0) {
    //   this.setState({ redirect: "/" });
    // }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/app"} />;
    }
    return (
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={ImageDark}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <Label>
                  <span>Email</span>
                  <Input
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="mt-1"
                    type="email"
                    placeholder="john@doe.com"
                  />
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    value={this.state.password}
                    onChange={this.handlePassChange}
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                  />
                </Label>

                <Button
                  className="mt-4"
                  onClick={this.handleSubmit}
                  block
                  tag={Link}
                >
                  Log in
                </Button>

                <hr className="my-8" />

                <Button block layout="outline">
                  <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Github
                </Button>
                <Button className="mt-4" block layout="outline">
                  <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Twitter
                </Button>

                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </p>
                <p className="mt-1">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="/create-account"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
