import React from "react";
import "../assets/css/landingpage.css";
import { Link } from "react-router-dom";
import bot3 from "../assets/img/bot3.png";
// import Header from "./Header";
// import HeroHome from "./HeroHome";

function LandingPage() {
  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
          <div className="pl-4 flex items-center">
            <a
              className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                className="h-6 w-6 inline-block fill-current text-yellow-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
              </svg>
              Phonix
            </a>
          </div>

          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {/* <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-black font-bold no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li> */}
            </ul>
            <Link to="/login">
              <button
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
              >
                Log In
              </button>
            </Link>
            <Link to="/create-account">
              <button
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div id="hero" className="container mx-auto h-screen">
        <div
          className="text-center px-3 lg:px-0"
          style={{ marginTop: "75px", width: "max-content" }}
        >
          <Link to="/app/play">
            <button
              id="navAction"
              className="playBtn mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
            >
              Play !
            </button>
          </Link>

          <Link to="/app/chatbot">
            <button
              id="navAction"
              className="playBtn mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
            >
              Chat
            </button>
          </Link>

          <Link to="/app/learn">
            <button
              id="navAction"
              className="playBtn mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
            >
              Learn
            </button>
          </Link>
        </div>
        <div
          className="col-xl-5 col-lg-5 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay="150"
          style={{ width: "max-content" }}
        >
          <center>
            <img src={bot3} className="img-fluid animated" alt="" />
          </center>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
