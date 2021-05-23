import React from "react";
import first from "../assets/images/first.jpg";
import second from "../assets/images/second.jpg";
import third from "../assets/images/third.jpg";

function Home() {
  return (
    <div className="content" id="home">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={1000}>
            <img src={first} className="d-block w-100 slider" alt="first-img" />
            <div className="carousel-caption d-none d-md-block">
              <h3>I like coding and problem solving.</h3>
              <h4>
                Hi, I'm developing myself on Front End Developer software.
              </h4>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src={second}
              className="d-block w-100 slider"
              alt="second-img"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Software Developer</h3>
              <h4>
                As you will see, I develop websites and applications that use
                modern HTML, CSS, and JavaScript.
              </h4>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={third} className="d-block w-100 slider" alt="third-img" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Full Stack Developer</h3>
              <h4>
                Building cutting-edge, easy-to-use, user-friendly websites and
                apps is truly my passion a great addition to your organization.
              </h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
/**
 *  <img src={first} className="d-block w-100 slider" alt="first-img" />
  <img src={second} className="d-block w-100 slider" alt="second-img" />
 <img src={third} className="d-block w-100 slider" alt="third-img" />
 */
