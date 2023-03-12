import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="text-sect">
          <p className="hd"> Frendzy Community for Developers</p>
          <p className="connect">Team Work</p>
          <p className="find">
            Find a frendzy to connect and collaborate
          </p>
          <Link to="/users" className="connect-btn">
            connect now
          </Link>
        </div>
      </div>

      <div className="ssb">
        <div className="sub-sect">
          <h2>find a Frendzy and develop your skill</h2>
          <img
            src="https://media.istockphoto.com/photos/an-africanamerican-guy-using-laptop-in-the-office-picture-id1254062265"
            alt=""
            className="afro"
          />
          <p>
            it is great to be part of a tremendous family that seeks the best for each other.
          </p>
        </div>
        <div className="sub-sect">
          <h2>Growing together</h2>
          <img
            src="./assets/dvg.jpg"
            alt="coders discussing about source code compiling discovers errors asks rest team explanations front multiple screens running algorithms software developers doing teamwork"
            className="dvg"
          />
          <p>
           Be  part of this great family and be the best .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
