import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
  <NavBar />
      <div className="signup">
        <div className="text-sect">
          
  </head>
  <body>
    <div class="container">
      <header class="header">
        <h1 id="title" class="text-center">SIGN UP</h1>
        <p id="description" class="description text-center">
          Thank you for your interest to join this community
        </p>
      </header>
      <form id="survey-form">
        <div class="form-group">
          <label id="name-label" for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label id="email-label" for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div class="form-group">
          <label id="number-label" for="number"
            >Age<span class="clue">(optional)</span></label
          >
          <input
            type="number"
            name="age"
            id="number"
            min="10"
            max="99"
            class="form-control"
            placeholder="Age"
          />
        </div>
        <div class="form-group">
          <p>Which option best describes your current role?</p>
          <select id="dropdown" name="role" class="form-control" required>
            <option disabled selected value>Select current role</option>
            <option value="student">Student</option>
            <option value="job">Full Time Job</option>
            <option value="learner">Full Time Learner</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <p>Would you recommend others to join at frendzy?</p>
          <label>
            <input
              name="user-recommend"
              value="definitely"
              type="radio"
              class="input-radio"
              checked
            />Definitely</label
          >
          <label>
            <input
              name="user-recommend"
              value="maybe"
              type="radio"
              class="input-radio"
            />Maybe</label
          >

          <label
            ><input
              name="user-recommend"
              value="not-sure"
              type="radio"
              class="input-radio"
            />Not sure</label
          >
        </div>

        <div class="form-group">
          <p>Identify your favorite feature of frendzy?</p>
          <select id="most-like" name="mostLike" class="form-control" required>
            <option disabled selected value>Select an option</option>
            <option value="challenges">Challenges</option>
            <option value="projects">Projects</option>
            <option value="community">Community</option>
            <option value="openSource">Open Source</option>
          </select>
        </div>

        <div class="form-group">
          <p>
            What would you like to see improved?
            <span class="clue">(Check all that apply)</span>
          </p>

          <label
            ><input
              name="prefer"
              value="front-end-projects"
              type="checkbox"
              class="input-checkbox"
            />Front-end Projects</label
          >
          <label>
            <input
              name="prefer"
              value="back-end-projects"
              type="checkbox"
              class="input-checkbox"
            />Back-end Projects</label
          >
          <label
            ><input
              name="prefer"
              value="data-visualization"
              type="checkbox"
              class="input-checkbox"
            />Data Visualization</label
          >
          <label
            ><input
              name="prefer"
              value="challenges"
              type="checkbox"
              class="input-checkbox"
            />Challenges</label
          >
          <label
            ><input
              name="prefer"
              value="open-source-community"
              type="checkbox"
              class="input-checkbox"
            />Open Source Community</label
          >
          <label
            ><input
              name="prefer"
              value="gitter-help-rooms"
              type="checkbox"
              class="input-checkbox"
            />Gitter help rooms</label
          >
          <label
            ><input
              name="prefer"
              value="videos"
              type="checkbox"
              class="input-checkbox"
            />Videos</label
          >
          <label
            ><input
              name="prefer"
              value="city-meetups"
              type="checkbox"
              class="input-checkbox"
            />City Meetups</label
          >
          <label
            ><input
              name="prefer"
              value="wiki"
              type="checkbox"
              class="input-checkbox"
            />Wiki</label
          >
          <label
            ><input
              name="prefer"
              value="forum"
              type="checkbox"
              class="input-checkbox"
            />Forum</label
          >
          
        </div>

        <div class="form-group">
          <p>Any comments or suggestions?</p>
          <textarea
            id="comments"
            class="input-textarea"
            name="comment"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>

        <div class="form-group">
          <button type="submit" id="submit" class="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  </body>
</html>
      <Footer/>
       </>
  );
}