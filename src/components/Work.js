import React from "react";
import face from "../assets/images/facebook.png";
import shop from "../assets/images/shoop.png";
import weather from "../assets/images/weatherr.png";
import netflix from "../assets/images/netflix.jpeg";
import query from "../assets/images/react-query.png";
import avarage from "../assets/images/avarag.png";

const Work = () => {
  return (
    <section id="work" className="portfolio-mf sect">
      <div className="container shadow bg-body rounded">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h1>My Projects</h1>
              <p>You can view my recent projects here</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 m-6">
            <div classname="shadow">
              <a href="https://facebook-cln.netlify.app/" target="_blank">
                <img
                  className="figure-img img-fluid rounded"
                  src={face}
                  alt="face-img"
                />
              </a>
              <h5 className="text-center">Facebook Clone</h5>
              <p className="caption text-justify">
                This project Facebook's design patterns using the React. The aim
                of this project was mainly to show error messages on
                registration and login pages and simulate the actual Facebook
                interface in terms of design.
              </p>
              <div className="text-center mb-5">
                <a
                  href="https://github.com/nepesovparahat/Facebook-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-6">
            <div classname="shadow">
              <a href="https://redux-shop-mobile.netlify.app/" target="_blank">
                <img
                  className="figure-img img-fluid rounded"
                  src={shop}
                  alt="shop-img"
                />
              </a>
              <h5 className="text-center">Shopping Cart</h5>
              <p className="caption text-justify">
                This app built with React components and redux. I used
                redux-persist to save some data to local storage so data such as
                items in the basket won't be lost or refreshed when the user
                leaves the page.
              </p>
              <div className="text-center mb-5">
                <a
                  href="https://github.com/nepesovparahat/Redux-Shopping-Cart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-6">
            <div classname="shadow">
              <a
                href="https://friendly-poitras-bd33ab.netlify.app/"
                target="_blank"
              >
                <img
                  className="figure-img img-fluid rounded"
                  src={weather}
                  alt="weather-img"
                />
              </a>
              <h5 className="text-center">Weather Forecast</h5>
              <p className="caption text-justify">
                I wanted to try and see how hard would it be to implement one of
                my favourite weather apps. Find the current weather forecast for
                any city or location in the world for 5 days with this simple
                little web app.
              </p>
              <div className="text-center mb-5">
                <a
                  href="https://github.com/nepesovparahat/Weather-Forecast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-6">
            <div classname="shadow">
              <a
                href="https://relaxed-franklin-2cf855.netlify.app/"
                target="_blank"
              >
                <img
                  className="figure-img img-fluid rounded"
                  src={query}
                  alt="query-img"
                />
              </a>
              <h5 className="text-center">React Query</h5>
              <p className="caption text-justify">
                This app is listing two API data and I added a button to list
                each API data. Clicking on each button lists its data.
              </p>
              <div className="text-center m-b-2">
                <a
                  href="https://github.com/nepesovparahat/React-Query"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-6">
            <div classname="shadow">
              <a href="https://netflix-clone-vue.netlify.app/" target="_blank">
                <img
                  className="figure-img img-fluid rounded"
                  src={netflix}
                  alt="netflix-img"
                />
              </a>
              <h5 className="text-center">Netfix Clone</h5>
              <p className="caption text-justify">
                In project, I tried to simulate the Netflix interface using
                Vue.js to practice pulling data from TMDb API with Axios. I used
                the Swiper library for SCSS and Slider in the design. How to
                write code better, how to manage folder structure etc. Any tips
                on it would be really appreciated.
              </p>
              <div className="text-center mb-5">
                <a
                  href="https://github.com/nepesovparahat/netflix-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  view project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-6">
            <div classname="shadow">
              <a
                href="https://thirsty-brattain-740cf5.netlify.app/"
                target="_blank"
              >
                <img
                  className="figure-img img-fluid rounded"
                  src={avarage}
                  alt="avarage-img"
                />
              </a>
              <h5 className="text-center">Vue Averaga</h5>
              <p className="caption text-justify">
                This project can calculate the student's GPA online. The student
                can add the lesson code, notes such as first, second and final,
                and delete them. If the student's GPA is less than 60, the
                warning changes to green, if not red.
              </p>
              <div className="text-center mb2">
                <a
                  href="https://github.com/nepesovparahat/Vue-Average-Calculation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  view project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
